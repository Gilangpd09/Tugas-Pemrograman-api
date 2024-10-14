let data = [
	{
		id: 1,
		name: 'Gilang',
		age: 21,
		address: 'Gedog',
		city: 'Blitar',
		phone: '085735913078',
		hobbies: ['coding', 'workout'],
		work: ['student'],
	},
	{
		id: 2,
		name: 'Ariana Grande',
		age: 31,
		address: 'Florida',
		city: 'Amerika',
		phone: '111-2345-678',
		hobbies: ['workout', 'eating'],
		work: ['singer'],
	},
	{
		id: 3,
		name: 'Xinyu',
		age: 22,
		address: 'Beijing',
		city: 'China',
		phone: '444-1234-456',
		hobbies: ['traveling', 'studying'],
		work: ['singer'],
	},
	{
		id: 4,
		name: 'Bruno Mars',
		age: 39,
		address: 'Hawai',
		city: 'Amerika',
		phone: '555-40144-123',
		hobbies: ['traveling'],
		work: ['singer'],
	},
];

// TODO 1 : Dapatkan semua data dalam format tabel
console.log("Semua data dalam format tabel:");
console.table(data);

// 2. Dapatkan data dengan nama tertentu
const getByName = (nama) => data.filter(person => person.name === nama);
console.log("Data dengan Nama 'Gilang':", getByName('Gilang')); // Ganti 'Gilang' sesuai kebutuhan

// 3. Dapatkan data dengan alamat Amerika
const getByAddress = (alamat) => data.filter(person => person.city === alamat);
console.log("Data dengan Alamat 'Amerika':", getByAddress('Amerika'));

// 4. Dapatkan data dengan umur >= 30
const getByAge = (umur) => data.filter(person => person.age >= umur);
console.log("Data dengan Umur >= 30:", getByAge(30));

// 5. Dapatkan data dengan work singer
const getByWork = (pekerjaan) => data.filter(person => person.work.includes(pekerjaan));
console.log("Data dengan Pekerjaan 'singer':", getByWork('singer'));
