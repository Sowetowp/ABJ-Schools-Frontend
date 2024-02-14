import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Toaster } from "react-hot-toast";
import Test from "./Pages/Test";
import Loadable from "react-loadable";
import Preloader from "./Components/Preloader";

const Home = Loadable({
	loader: () => import("./Pages/Home"),
	loading: Preloader,
});
const AddAdmin = Loadable({
	loader: () => import("./BackEnd/AddAdmin.js"),
	loading: Preloader,
});
const Attendance = Loadable({
	loader: () => import("./Components/Attendance"),
	loading: Preloader,
});
const Pendingassignment = Loadable({
	loader: () => import("./Components/Pendingassignment"),
	loading: Preloader,
});
const Addparent = Loadable({
	loader: () => import("./Components/Addparent"),
	loading: Preloader,
});
const AdminLogin = Loadable({
	loader: () => import("./BackEnd/AdminLogin"),
	loading: Preloader,
});
const StudentDashboard = Loadable({
	loader: () => import("./Pages/StudentDashboard"),
	loading: Preloader,
});
const AdminDashboard = Loadable({
	loader: () => import("./Pages/AdminDashboard"),
	loading: Preloader,
});
const News = Loadable({
	loader: () => import("./Pages/News"),
	loading: Preloader,
});
const About = Loadable({
	loader: () => import("./Pages/About"),
	loading: Preloader,
});
const Contact = Loadable({
	loader: () => import("./Pages/Contact"),
	loading: Preloader,
});
const Gallery = Loadable({
	loader: () => import("./Pages/Gallery"),
	loading: Preloader,
});
const Teacher = Loadable({
	loader: () => import("./Pages/Teacher"),
	loading: Preloader,
});
const SingleTeacher = Loadable({
	loader: () => import("./Pages/SingleTeacher"),
	loading: Preloader,
});
const Calendar = Loadable({
	loader: () => import("./Pages/Calendar"),
	loading: Preloader,
});
const Admission = Loadable({
	loader: () => import("./Pages/Admission"),
	loading: Preloader,
});
const TeacherLoginPage = Loadable({
	loader: () => import("./Pages/TeacherLoginPage"),
	loading: Preloader,
});
const StudentLoginPage = Loadable({
	loader: () => import("./Pages/StudentLoginPage"),
	loading: Preloader,
});
const StudentHome = Loadable({
	loader: () => import("./Components/StudentHome"),
	loading: Preloader,
});
const WalletFunding = Loadable({
	loader: () => import("./Components/WalletFunding"),
	loading: Preloader,
});
const FeesPayment = Loadable({
	loader: () => import("./Components/FeesPayment"),
	loading: Preloader,
});
const PayHistory = Loadable({
	loader: () => import("./Components/PayHistory"),
	loading: Preloader,
});
const Result = Loadable({
	loader: () => import("./Components/Result"),
	loading: Preloader,
});
const Spassword = Loadable({
	loader: () => import("./Components/Spassword"),
	loading: Preloader,
});
const AdminHome = Loadable({
	loader: () => import("./Components/AdminHome"),
	loading: Preloader,
});
const AallTeachers = Loadable({
	loader: () => import("./Components/AallTeachers"),
	loading: Preloader,
});
const AddTeacher = Loadable({
	loader: () => import("./Components/AddTeacher"),
	loading: Preloader,
});
const StudentsList = Loadable({
	loader: () => import("./Components/StudentsList"),
	loading: Preloader,
});
const AddStudent = Loadable({
	loader: () => import("./Components/AddStudent"),
	loading: Preloader,
});
const PendingCa = Loadable({
	loader: () => import("./Components/PendingCa.js"),
	loading: Preloader,
});
const TermFee = Loadable({
	loader: () => import("./Components/TermFee.js"),
	loading: Preloader,
});
const PostNews = Loadable({
	loader: () => import("./Components/PostNews"),
	loading: Preloader,
});
const AllNews = Loadable({
	loader: () => import("./Components/AllNews"),
	loading: Preloader,
});
const PostImage = Loadable({
	loader: () => import("./Components/PostImage"),
	loading: Preloader,
});
const AllImages = Loadable({
	loader: () => import("./Components/AllImage"),
	loading: Preloader,
});
const CreateSession = Loadable({
	loader: () => import("./Components/CreateSession"),
	loading: Preloader,
});
const ViewCalendar = Loadable({
	loader: () => import("./Components/ViewCalendar"),
	loading: Preloader,
});
const TeacherDashboard = Loadable({
	loader: () => import("./Pages/TeacherDashboard"),
	loading: Preloader,
});
const UploadResult = Loadable({
	loader: () => import("./Components/UploadResult"),
	loading: Preloader,
});
const TviewResults = Loadable({
	loader: () => import("./Components/TviewResults"),
	loading: Preloader,
});
const Teacherpass = Loadable({
	loader: () => import("./Components/TeacherPass"),
	loading: Preloader,
});
const Thome = Loadable({
	loader: () => import("./Components/Thome"),
	loading: Preloader,
});
const AllResults = Loadable({
	loader: () => import("./Components/AllResults"),
	loading: Preloader,
});
const ParentsList = Loadable({
	loader: () => import("./Components/ParentsList"),
	loading: Preloader,
});
const ParentDashboard = Loadable({
	loader: () => import("./Pages/ParentDashboard"),
	loading: Preloader,
});
const ParentLogin = Loadable({
	loader: () => import("./Pages/ParentLoginPage"),
	loading: Preloader,
});
const ParentResult = Loadable({
	loader: () => import("./Components/ParentResult"),
	loading: Preloader,
});
const ParentAttendance = Loadable({
	loader: () => import("./Components/ParentAttendance"),
	loading: Preloader,
});
const ParentHome = Loadable({
	loader: () => import("./Components/ParentHome"),
	loading: Preloader,
});
const Payment = Loadable({
	loader: () => import("./Components/Payment"),
	loading: Preloader,
});
const Broadsheet = Loadable({
	loader: () => import("./Components/Broadsheet"),
	loading: Preloader,
});
const PostAssignment = Loadable({
	loader: () => import("./Components/PostAssignment"),
	loading: Preloader,
});
const PostCa = Loadable({
	loader: () => import("./Components/PostCa"),
	loading: Preloader,
});
const PostExam = Loadable({
	loader: () => import("./Components/PostExam"),
	loading: Preloader,
});
const PendingExam = Loadable({
	loader: () => import("./Components/PendingExam"),
	loading: Preloader,
});
const UpdatePaid = Loadable({
	loader: () => import("./Components/UpdatePaid.js"),
	loading: Preloader,
});
const ChildDetails = Loadable({
	loader: () => import("./Components/ChildDetails.js"),
	loading: Preloader,
});
const ClassTeacher = Loadable({
	loader: () => import("./Components/ClassTeacher.js"),
	loading: Preloader,
});

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/teachers" element={<Teacher/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/admission" element={<Admission/>}/>
          <Route path="/passign" element={<Pendingassignment/>}/>
          <Route path="/tlogin" element={<TeacherLoginPage/>}/>
          <Route path="/attendance" element={<Attendance/>}/>
          <Route path="/slogin" element={<StudentLoginPage/>}/>
          <Route path="/shome" element={<StudentHome/>}/>
          <Route path="/wfund" element={<WalletFunding/>}/>
          <Route path="/fpay" element={<FeesPayment/>}/>
          <Route path="/phistory" element={<PayHistory/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/spass" element={<Spassword/>}/>
          <Route path="/ahome" element={<AdminHome/>}/>
          <Route path="/aallteachers" element={<AallTeachers/>}/>
          <Route path="/addteacher" element={<AddTeacher/>}/>
          <Route path="/addparent" element={<Addparent/>}/>
          <Route path="/parentslist" element={<ParentsList/>}/>
          <Route path="/studentslist" element={<StudentsList/>}/>
          <Route path="/addstudent" element={<AddStudent/>}/>
          <Route path="/adash" element={<AdminDashboard/>}/>
          <Route path="/postnews" element={<PostNews/>}/>
          <Route path="/allnews" element={<AllNews/>}/>
          <Route path="/postimage" element={<PostImage/>}/>
          <Route path="/allimages" element={<AllImages/>}/>
          <Route path="/createsession" element={<CreateSession/>}/>
          <Route path="/veiwcalendar" element={<ViewCalendar/>}/>
          <Route path="/tdash" element={<TeacherDashboard/>}/>
          <Route path="/sdash" element={<StudentDashboard/>}/>
          <Route path="/uploadresult" element={<UploadResult/>}/>
          <Route path="/alogin" element={<AdminLogin/>}/>
          <Route path="/plogin" element={<ParentLogin/>}/>
          <Route path="/tviewresults" element={<TviewResults/>}/>
          <Route path="/tpass" element={<Teacherpass/>}/>
          <Route path="/thome" element={<Thome/>}/>
          <Route path="/aresult" element={<AllResults/>}/>
          <Route path="/pdash" element={<ParentDashboard/>}/>
          <Route path="/presult/:param" element={<ParentResult/>}/>
          <Route path="/pattendance/:param" element={<ParentAttendance/>}/>
          <Route path="/phome" element={<ParentHome/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/broadsheet" element={<Broadsheet/>}/>
          <Route path="/postassign" element={<PostAssignment/>}/>
          <Route path="/postca" element={<PostCa/>}/>
          <Route path="/postexam" element={<PostExam/>}/>
          <Route path="/attexam" element={<PendingExam/>}/>
          <Route path="/attca" element={<PendingCa/>}/>
          <Route path="/ufees" element={<TermFee/>}/>
          <Route path="/upaid" element={<UpdatePaid/>}/>
          <Route path="/chfee/:param" element={<ChildDetails/>}/>
          <Route path="/addadmin" element={<AddAdmin/>}/>
          <Route path="/classteacher" element={<ClassTeacher/>}/>
          
          <Route path="/teacher/:id" element={<SingleTeacher/>} exact/>
        </Routes>
      </Router>
      <Toaster/>
    </>
  );
}

export default App;