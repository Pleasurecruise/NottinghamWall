import YimingSwiper from '@/components/YimingSwiper.vue'
import YimingGuess from '@/components/YimingGuess.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    YimingSwiper: typeof YimingSwiper
    YimingGuess: typeof YimingGuess
  }
}
export type YimingGuessInstance = InstanceType<typeof YimingGuess>
