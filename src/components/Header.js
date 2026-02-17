const Header = ({name}) => {
  return (
    <>
      <h1>Todo List</h1>
      <button onClick={()=> alert("hello "+name+"!")}>ユーザー情報</button>
    </>
  )
}

export default Header