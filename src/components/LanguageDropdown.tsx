import { Dropdown } from "react-bootstrap";

const LanguageDropdown = () => {
  return (
    <>
      <Dropdown className="nav-item dropdown ml-auto">
        <Dropdown.Toggle className="btn btn-outline-info dropdown-toggle" >
          O'zbek
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu pr-dropdown-menu" >
          <button
            className="btn rounded-0 dropdown-item"
          >
            Русский
          </button>
          <button
            className="btn rounded-0 dropdown-item active"
          >
            O'zbek
          </button>
          <button
            className="btn rounded-0 dropdown-item"
          >
            English
          </button>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default LanguageDropdown;