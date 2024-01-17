const div = document.getElementById("emoji")



emojiList.forEach((e) => {
    const em = document.createElement("tr")
    const emoji = document.createElement("td")
    const aliases = document.createElement("td")
    const description = document.createElement("td")

    emoji.innerText = e.emoji;
    aliases.innerText = e.aliases;
    description.innerText = e.description;

    // console.log(emoji,aliases,description);

    em.append(emoji);
    em.append(aliases);
    em.append(description);
    div.append(em);
})

document.getElementById("search").addEventListener("keyup" , (e) =>{
    
    const val = document.getElementById("search").value;
    console.log(val);


    // window.onload = () => true;


    let filt = emojiList.filter((k) =>{
        div.innerHTML = "";
        if(k.aliases.some(h => h.startsWith(val))){
            return true;
        }
        if(k.tags.some(h => h.startsWith(val))){
            return true;
        }
    })
    console.log(filt)

    
    filt.forEach((e) => {
        const em = document.createElement("tr")
        const emoji = document.createElement("td")
        const aliases = document.createElement("td")
        const description = document.createElement("td")
        
        emoji.innerText = e.emoji;
        aliases.innerText = e.aliases;
        description.innerText = e.description;
    
        // console.log(emoji,aliases,description);
    
        em.append(emoji);
        em.append(aliases);
        em.append(description);
        div.append(em);
    })
});