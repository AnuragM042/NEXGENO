import { createContext, useContext, useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-feather";
import { FaPlus, FaTimes } from "react-icons/fa";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <li className="border-b my-5 bg-white" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex text-2xl justify-between items-center p-4 font-medium"
      >
        {trigger}
        {!open ? <FaPlus /> : <FaTimes />}
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
