export function changeBGColor(color: string){
    const root = document.documentElement;

    switch(color){
        case "blue":
            root.style.setProperty('--team-color', '#00B0F0');
            root.style.setProperty('--team-accent-color', '#DDEBF7');
            break;
        case "red":
            root.style.setProperty('--team-color', '#FC4936');
            root.style.setProperty('--team-accent-color', '#FEB0A8');
            break;
        case "orange":
            root.style.setProperty('--team-color', '#F4B084');
            root.style.setProperty('--team-accent-color', '#FCE4D6');
            break;
    }
}

