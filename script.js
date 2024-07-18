document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Fetch input value
      const fullName = form.fullName.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const GetInDate = form.checkInDate.value;
      const GetOutDate = form.checkOutDate.value;
      const roomType = form.roomType.value;
      const specialRequests = form.specialRequests.value;
  
      // You can perform validation here if needed
  
      // Example: Send data to backend (in real scenario, use fetch API or submit to server)
      console.log({
        fullName,
        email,
        phone,
        Getindate,
        Getoutdate,
        roomType,
        AnyspecialRequests
      });
  
      // Simulate successful booking )
      alert('Booking submitted successfully!');
      form.reset(); // Clear form fields after submit
    });
  });