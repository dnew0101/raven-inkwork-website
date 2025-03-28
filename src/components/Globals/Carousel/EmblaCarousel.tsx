"use client";
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

import { motion, AnimatePresence } from 'framer-motion'

const TWEEN_FACTOR_BASE = 0.2

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const handleImageClick = (image: number) => {
    setSelectedImage(slides[image])
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `translateX(${translate}%)`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax);

    return () => {
      emblaApi
        .off('reInit', setTweenNodes)
        .off('reInit', setTweenFactor)
        .off('reInit', tweenParallax)
        .off('scroll', tweenParallax)
        .off('slideFocus', tweenParallax);
    };
  }, [emblaApi, setTweenNodes, setTweenFactor, tweenParallax]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <Image
                    className="embla__slide__img embla__parallax__img"
                    src={slide}
                    alt={`Photo ${index} in carousel collection`}
                    width={500}
                    height={500}
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <AnimatePresence>
          <motion.div 
            className="modal fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm z-40"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-content relative h-[60vh] w-[50vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 260,
                damping: 20
              }}
            >
              <button
                className="absolute flex justify-center items-center top-2 right-2 text-white text-2xl bg-red-400 opacity-65 
                hover:scale-125 hover:opacity-100 hover:bg-red-400 transition-all duration-200 rounded-full p-2.5 w-5 h-5 border-2 border-white"
                onClick={closeModal}
              >
                &times;
              </button>
              <Image
                src={selectedImage!}
                alt="Full-size image"
                width={800}
                height={800}
                className="rounded-xl z-50"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      <div className="embla__controls flex flex-row justify-center">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
