import {Link, useLocation} from 'react-router-dom';

export default function MenuUlList({handleMenuOpen, menuList}) {
    const pathName = useLocation().pathname

  return (
    <ul className="grid">
      {menuList.map((item, index) => {
        const isActive = pathName === item.path;
        return (
          <li key={index} className={`button py-1 px-4 relative overflow-hidden
              ${isActive 
                ? "bg-indigo-200/30 border-t border-b border-(--NavHeroSplit) text-(--primaryTextColor)" 
                : "before:absolute before:inset-0 before:bg-[var(--primaryHoverColor)] before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"}`}>
            <Link to={item.path} target={item.target?'_blank':'_self'}
              className={`relative text-sm p-4 flex items-center cursor-pointer gap-2`}
              onClick={handleMenuOpen}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  )
}
