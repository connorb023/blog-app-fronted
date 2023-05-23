import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">BlogoSphere</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1683752590938-e3b687c1f344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
        alt=""
      />
    </div>
  );
}