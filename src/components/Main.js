function Main (){
    return (
<div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h2 className="lp">React.js</h2>
            </div>
            <div className="item-menu">
              <a href="#"> Login</a>
            </div>
          </div>
          <div className="form">
              <h2>Entre em contato!</h2>
            <form>
              <div className="items-form">
                <input placeholder="Nome:" type="text" />
                <input placeholder="Sobrenome:" type="text" />
                <input placeholder="Email:" type="text" />
                <input placeholder="Cargo:" type="text" />
                <input type="submit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
      )
}
      export default Main;