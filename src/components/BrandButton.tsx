import { ReactNode } from 'react'
import { styled } from '../../styled-system/jsx'

interface BrandButtonProps {
  label: string
  brandLogo: ReactNode
  onClick: () => void
  backgroundColor: string
  labelColor: string
}

const BrandButton: React.FC<BrandButtonProps> = ({
  label,
  brandLogo,
  onClick,
  backgroundColor,
  labelColor,
}) => {
  return (
    <styled.button
      onClick={onClick}
      display={'flex'}
      alignItems={'center'}
      backgroundColor={backgroundColor}
      borderRadius={24}
      padding={'1rem'}
      cursor={'pointer'}
      color={labelColor || 'white'}
      fontWeight={'bold'}
      fontSize={'2rem'}
      gap={'1rem'}
      boxShadow={'0px 4px 8px rgba(0, 0, 0, 0.2)'}
      _active={{
        transform: 'scale(0.98)',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
      }}
    >
      {brandLogo}
      {label}
    </styled.button>
  )
}
export default BrandButton
