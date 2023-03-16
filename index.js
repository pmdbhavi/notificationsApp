const Notification = (props) => {
  const { className, text, image } = props;

  return (
    <div className={className}>
      <img src={image} className="image" />
      <p className="para">{text}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="information"
      text="Information Message"
      image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="success"
      text="Success Message"
      image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="warning"
      text="Warning Message"
      image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="error"
      text="Error Message"
      image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
