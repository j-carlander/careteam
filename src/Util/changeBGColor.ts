export function changeBGColor(color: string){
    const root = document.documentElement;

    switch(color){
        case "blue":
            root.style.setProperty('--team-color', 'rgb(0, 153, 255)');
            root.style.setProperty('--team-accent-color', 'lightblue');
            break;
        case "red":
            root.style.setProperty('--team-color', 'rgb(248, 69, 69)');
            root.style.setProperty('--team-accent-color', 'pink');
            break;
        case "orange":
            root.style.setProperty('--team-color', 'rgb(255, 185, 55)');
            root.style.setProperty('--team-accent-color', 'rgb(250, 215, 151)');
            break;
    }
}

