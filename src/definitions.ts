export interface FactBoxItemProps {
  label: string | string[]
  value?: any
  labelClass?: string
  valueClass?: string
  isWeighted?: boolean
  showTooltip?: boolean
  tooltipId?: string
  tooltipContent?: HTMLElement | string
}
