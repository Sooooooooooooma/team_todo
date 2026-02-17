import "./Header.css"

const Header = ({name}) => {
  const showName = () => {
    if(name!==""){
      alert("こんにちは  "+name+" さん!");
    }else{
      alert("ようこそ Todo List へ!");
    };
  };
  return (
    <div className="header">
      <h1>Todo List</h1>
      <input type="image" src="/kkrn_icon_user.png" alt="ユーザー名" className="icon" onClick={showName}/>
    </div>
  )
}

export default Header