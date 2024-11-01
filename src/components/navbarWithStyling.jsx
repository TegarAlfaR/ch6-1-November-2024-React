import styles from "./navbarWithStyling.module.css";

function NavbarWithStyling(props) {
  console.log(props)
  return (
    <div className={styles.navbar}>
      <h1>FSW-2 - {props.name}</h1>
      <ul>
        <li>
          <a href="">{props.menu[0]}</a>
        </li>
        <li>
          <a href="">{props.menu[1]}</a>
        </li>
        <li>
          <a href="">{props.menu[2]}</a>
        </li>
      </ul>
    </div>
  );
}

export default NavbarWithStyling;
