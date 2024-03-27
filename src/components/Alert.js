import "./Alert.css";
import clsx from "clsx";
// Синтаксис імпорту CSS-модуля
import css from "./Alert.module.css";

// Отримуємо об'єкт відповідності імен класів
console.log(css); // { alert: "Alert_alert_ax7yz" }

const className = clsx(
  "first",
  10,
  undefined && "second",
  true && "third",
  false ? "fourth" : "fifth"
);

/* const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};

const getBgColor = (variant) => {
  switch (variant) {
    case "info":
      return "blue";
    case "success":
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";
    default:
      throw new console.error(`Unsupported variant prop value - ${variant}`);
  }
}; */

/* export const Alert = ({ variant, outlined, elevated, children }) => {
  const classNames = ["alert", variant];
  if (outlined) classNames.push("is-outlined");
  if (elevated) classNames.push("is-elevated");
  return (
    // <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
    <p className={classNames.join(" ")}>{children}</p>
  );
};

export const Alert = ({ variant, outlined, elevated, children }) => {
return (
    <p
      className={clsx(
        "alert",
        variant,
        outlined && "is-outlined",
        elevated && "is-elevated"
      )}>
      {children}
    </p>
  );
}; */

/* export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx("alert", variant, {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}>
      {children}
    </p>
  );
}; */

/* export const Alert = ({ children }) => {
  // Звертаємось до властивості об'єкта на ім'я класу з файлу модуля
  return <p className={css.alert}>{children}</p>;
}; */

/* export const Alert = ({ variant, children }) => {
  return <p className={css[variant]}>{children}</p>;
}; */

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}>
      {children}
    </p>
  );
};
