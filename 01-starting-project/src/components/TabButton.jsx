export default function TabButton({ children, isSelected, ...props }) {
  // function handleClick() {
  //     console.log('you are clicking the button')
  // }

  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
