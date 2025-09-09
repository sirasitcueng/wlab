import * as XLSX from 'xlsx';

const fetchEvents = async () => {
    const res = await fetch('db/events.xlsx');
    const buffer = await res.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);
    return json
};


const fetchMembers = async () => {
    const res = await fetch('http://localhost:3000/db/members.xlsx');
    const buffer = await res.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);
    json.forEach(j => {
        if (j?.fields) j.fields = j.fields.split(';').map(str => str.trim()).filter(str => str.length > 0)
        if (j?.education) j.education = j.education.split(';').map(str => str.trim()).filter(str => str.length > 0)
        if (j?.awards) j.awards = j.awards.split(';').map(str => str.trim()).filter(str => str.length > 0)
    })
    return json
};

const TypeName = {
    PI: 'Principal Investigator',
    RF: 'Research Fellow',
    PhD: 'PhD Student',
    visitor: 'Visiting Scholar',
    alumni: 'Alumni'
}


export { fetchEvents, fetchMembers, TypeName}