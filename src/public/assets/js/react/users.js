const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент

fetch('/userReact')
    .then((body) => {
       body = JSON.parse(body);
        root.render(
            body.map((user)=> <>
                <a href={'/user/id/'+user._id}>
                    <p><b>{user.name}</b> {user.age}</p>
                </a>
            </>)
        )
    })
    .catch(err => console.log(err));