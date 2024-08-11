import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Calendar,
    CheckCircle,
    Users,
    DollarSign,
    XCircle,
    UserPlus,
    MessageSquare,
    MapPin,
    Flag
  } from 'lucide-react';
  import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
  
  // Sample data for the chart
  const data = [
    { name: 'Jan', bookings: 30 },
    { name: 'Feb', bookings: 45 },
    { name: 'Mar', bookings: 60 },
    { name: 'Apr', bookings: 80 },
    { name: 'May', bookings: 70 },
    { name: 'Jun', bookings: 90 },
  ];
  
  const AdminDashboard = () => {
    return (
      <div className="flex flex-wrap p-4 gap-4">
        <Card className='w-1/4 border border-primary'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <Calendar className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">150+</div>
          </CardContent>
        </Card>
  
        <Card className='w-1/4 border border-primary'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Booked Events</CardTitle>
            <CheckCircle className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
          </CardContent>
        </Card>
  
        <Card className='w-1/4 border border-primary'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Attendees</CardTitle>
            <Users className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5000</div>
          </CardContent>
        </Card>
  
        <Card className='w-1/4 border border-primary'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,00,000</div>
          </CardContent>
        </Card>
  
        <Card className='w-1/4 border border-primary'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Canceled Events</CardTitle>
            <XCircle className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
  
        <Card className='w-1/4 border border-primary'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Registrations</CardTitle>
            <UserPlus className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50</div>
          </CardContent>
        </Card>
  
        <Card className='w-1/4 border border-primary'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Feedback Received</CardTitle>
            <MessageSquare className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">200</div>
          </CardContent>
        </Card>
  
        <Card className='w-1/4 border border-primary'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Venues</CardTitle>
            <MapPin className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
          </CardContent>
        </Card>
  
        <Card className='w-1/4 border border-primary'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sponsors</CardTitle>
            <Flag className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
          </CardContent>
        </Card>
  
        {/* Event Booking Details Graph */}
        <Card className='w-full border border-primary mt-4'>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Event Booking Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bookings" fill="#8884d8" />
              </BarChart>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  export default AdminDashboard;
  