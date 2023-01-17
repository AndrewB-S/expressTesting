document.querySelector('#submit').addEventListener('click', requestName())

requestName = async(req,res) => {
    let rapName = document.querySelector('#rapName').textContent
    console.log(rapName)
    // let name = await fetch(/api)
}