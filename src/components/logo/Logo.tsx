import Licon from './Licon'
import theme from '../../config/theme'

const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer group">
      {/* Icon - Grid of dots */}
      <div className="flex flex-wrap w-8 h-8">
        <Licon />
      </div>
      
      {/* Text that slides in */}
      <div className="overflow-hidden">
        <span 
        
        className="text-[#1DA1F2] text-xl font-bold pl-2 
                       transform translate-x-[-100%] opacity-0 
                       group-hover:translate-x-0 group-hover:opacity-100
                       transition-all duration-300 ease-in-out inline-block">
                        
          <p style={{ fontFamily: theme.fonts.secondary,fontSize: theme.fontSizes['xl'] }}>OxDev</p>
        </span>
      </div>
    </div>
  )
}

export default Logo 