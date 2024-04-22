import { Shadow } from '@status-im/components'

type DashboardCardWrapperProps = {
  children: React.ReactNode
  padding?: string
  width?: string
  height?: string
  minWidth?: string
  maxWidth?: string
  maxHeight?: string
  isErrorBorder?: boolean
}

const DashboardCardWrapper = ({
  children,
  padding = '12px 16px',
  width,
  height = 'auto',
  minWidth = '0',
  maxWidth,
  maxHeight,
  isErrorBorder,
}: DashboardCardWrapperProps) => {
  return (
    <Shadow
      variant="$1"
      style={{
        flexGrow: '1',
        width: width,
        height: height,
        borderRadius: '16px',
        padding,
        backgroundColor: '$background',
        minWidth: minWidth,
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        border: isErrorBorder ? '1px solid  #D92344' : '1px solid #E7EAEE',
      }}
    >
      {children}
    </Shadow>
  )
}
export default DashboardCardWrapper
