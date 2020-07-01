export default async function loadData()
{
    // Using regex to turn non-json data from an origin I don't control into json data and trying to parse it?
    // What could go wrong?
    const data = await (await fetch('https://raw.githubusercontent.com/md678685/spigot-drama-generator/master/index.js')).text();
    let combinationsStr = /combinations = ({(?:.*\n)*?\s*})/g.exec(data)[1];
    combinationsStr = combinationsStr.replace(/(\w+):/g, '"$1":');
    let sentencesStr = /sentences = (\[(?:.*\n)*?\s*])/g.exec(data)[1];
    sentencesStr = sentencesStr.replace(/,\n\s*]/, ']');
    // Just be glad I'm not eval()-ing this stuff
    return {
        combinations: JSON.parse(combinationsStr),
        sentences: JSON.parse(sentencesStr)
    };
}
