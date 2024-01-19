import "./index.css";

export default function UserData({ username, age, tel, img }) {
  return (
    <div className="card">
      <div className="topside" ></div>
      <img src={img} alt="" />
      <div className="info">
        <p>Username: {username}</p>
        <p>Age: {age}</p>
        <p>Telephone: {tel}</p>
      </div>
    </div>
  );
}
