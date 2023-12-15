let info = [
    {
        
        title: "Royal caribbean transatlantic cruise",
        text: "Royal Caribbean Group, formerly known as Royal Caribbean Cruises Ltd., is a global cruise holding company incorporated in Liberia and based in Miami, Florida, US. It is the world's second-largest cruise line operator, after Carnival Corporation & plc.",
    },
    {
        
        title: "Royal caribbean transatlantic cruise",
        text: "Royal Caribbean Group, formerly known as Royal Caribbean Cruises Ltd., is a global cruise holding company incorporated in Liberia and based in Miami, Florida, US. It is the world's second-largest cruise line operator, after Carnival Corporation & plc.",
    },
    {
       
        title: "Royal caribbean transatlantic cruise",
        text: "Royal Caribbean Group, formerly known as Royal Caribbean Cruises Ltd., is a global cruise holding company incorporated in Liberia and based in Miami, Florida, US. It is the world's second-largest cruise line operator, after Carnival Corporation & plc.",
    },
];
let deal = document.getElementById('deals');
for(element of info){
    let mainDiv = document.createElement('div');
    deal.appendChild(mainDiv);
    mainDiv.className = 'main';

    let titleTag = document.createElement('h3');
    mainDiv.appendChild(titleTag);
    titleTag.textContent = element.title;
    titleTag.className = 'title';

    let textTag = document.createElement('p');
    mainDiv.appendChild(textTag);
    textTag.textContent = element.text;
    textTag.className = 'texts';
}