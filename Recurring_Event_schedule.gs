function createRecurringEvents() {
  // Mendapatkan kalender default
  var calendar = CalendarApp.getDefaultCalendar();
  
  // Mendefinisikan waktu mulai dan akhir
  var startTime = new Date();
  startTime.setHours(19, 0, 0); // Jam 7 malam
  var endTime = new Date();
  endTime.setHours(23, 0, 0); // Jam 11 malam
  
  // Mengatur tanggal mulai (Jumat pertama)
  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + (5 - currentDate.getDay() + 7) % 7); // Mencari Jumat berikutnya
  
  // Mengatur tanggal akhir (1 tahun ke depan)
  var endDate = new Date();
  endDate.setFullYear(endDate.getFullYear() + 1);
  
  // Mengundang email
  var guests = "xxx.gmail.com";
  
  // Membuat acara berulang
  while (currentDate <= endDate) {
    calendar.createEvent('Menonton Film',
      new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 19, 0),
      new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 0),
      { guests: guests, sendInvites: true });
    
    // Maju ke Jumat berikutnya
    currentDate.setDate(currentDate.getDate() + 7);
  }
}
