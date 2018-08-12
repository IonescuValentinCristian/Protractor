// Utility functions for string manipulation, generate data, cleanup data, ...

export function randomDate(start:Date , end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,16);
};

export function compactString(text: string) {   
    return text.replace(/ /g,'').replace(/(\r\n\t|\n|\r\t)/gm,"").trim();        
}

export function extractSubstring(text: string, start: string, end: string) {
    return text.substring(text.indexOf(start)+1, text.indexOf(end));    
}
