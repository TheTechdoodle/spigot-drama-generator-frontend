export default async function loadData()
{
    return await (await fetch('https://raw.githubusercontent.com/md678685/spigot-drama-generator/master/src/data.json')).json();
}
