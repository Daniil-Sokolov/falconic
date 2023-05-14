const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент

fetch('/api/method1')
    .then((body) => {
        body = JSON.parse(body);
        root.render(
            <>
                <h1>{body.status}</h1>
                <p>{body.message}</p>
            </>    
        )
    })
    .catch(err => console.log(err));