const fullLorem = "Lorem ipsum dolor sit amet. Id sunt dolor aut ullam voluptatem et quam dolor aut voluptatibus fugit. Rem odit magnam aut voluptas sint est itaque quidem qui totam autem. Sit minus ratione ut repellat dolorem ut animi consequatur eum odit dolor et cumque magnam sit suscipit commodi. Et sunt esse ab voluptates nulla et autem sint est impedit repellat. Aut unde Quis id cupiditate dolorem et dolorem dolor id aliquam Quis nam placeat dicta qui atque impedit aut placeat iste. Et reiciendis explicabo ad eligendi quia ut quisquam neque est laudantium dolorem aut quae autem et aspernatur impedit sed numquam nemo. Et sunt quod vel debitis omnis sit consequatur unde qui illo assumenda non sunt provident. Non voluptatem odio ut alias molestiae et suscipit delectus eos adipisci sunt aut suscipit aperiam ex autem quae. Et assumenda corrupti qui quia incidunt et porro minima id neque sunt. At iure numquam vel repudiandae enim est sapiente nostrum ea repellendus dolores eum perferendis quia!"
let masterString = '';
getLorem = (charCount) => {
    while(masterString.length <= charCount) {
        masterString += ' ' + fullLorem;
    }
    return masterString.slice(0,charCount);
}



fillLoremById = (id, charCount) => {
    const ele = document.getElementById(id);
    if (ele) {
        ele.innerText = getLorem(charCount);
    }
}

fillLoremByClassName = (className, charCount) => {
    elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
        for(let i = 0; i<elements.length; i++) {
            elements.item(i).innerText = getLorem(charCount);
        }
    }
}

fillTextSerially = (className,arr) => {
    elements = document.getElementsByClassName(className);
    for(let i=0; i<elements.length; i++) {
        const element = elements.item(i);
        element.innerHTML = arr[i];
    }
}