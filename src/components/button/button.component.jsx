/**
 * default
 *
 * inverted
 *
 * google sign in
 */

import "./button.styles.scss"

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
}

const Button = (props) => {
  const { children, buttonType, ...otherProps } = props
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
