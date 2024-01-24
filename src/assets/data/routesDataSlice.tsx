import { createSlice } from "@reduxjs/toolkit";
import { HiOutlineStatusOnline } from "react-icons/hi";
import {
  LuAlertCircle,
  LuBan,
  LuBellPlus,
  LuBookCopy,
  LuBookMarked,
  LuBookOpen,
  LuBookPlus,
  LuBookTemplate,
  LuBox,
  LuBus,
  LuCake,
  LuCalculator,
  LuCalendarClock,
  LuCalendarDays,
  LuClipboardList,
  LuClipboardSignature,
  LuDatabase,
  LuDatabaseBackup,
  LuDownload,
  LuEye,
  LuGalleryHorizontalEnd,
  LuHourglass,
  LuLayoutDashboard,
  LuList,
  LuListChecks,
  LuListOrdered,
  LuListTodo,
  LuMapPin,
  LuPenLine,
  LuPenSquare,
  LuPencilRuler,
  LuPhone,
  LuPieChart,
  LuPlus,
  LuSchool,
  LuSend,
  LuSettings,
  LuShoppingBag,
  LuTable,
  LuTablet,
  LuUser2,
  LuUserCheck2,
  LuUserCircle2,
  LuUserCog2,
  LuUserPlus2,
  LuUserSquare2,
  LuUserX2,
  LuUsers2,
  LuXOctagon,
  LuYoutube,
} from "react-icons/lu";
import { LiaExclamationSolid } from "react-icons/lia";
import { TbMessage, TbMessageDollar, TbMessageQuestion } from "react-icons/tb";
import {
  PiCertificate,
  PiExam,
  PiIdentificationBadge,
  PiIdentificationCard,
  PiImage,
  PiMoney,
  PiStudent,
  PiVan,
} from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrDocumentUser } from "react-icons/gr";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Dashboard from "../../views/admin/dashboard/index";
import RoutesLayout from "../../layouts/RoutesLayout";
import StudentRegistrationForm from "../../views/admin/studentmanagement/studentmanagementPanel/studentregistration";
import StudentRegistrationList from "../../views/admin/studentmanagement/studentmanagementPanel/studentregistrationlist";
import Marketplace from "../../views/admin/marketplace";
import ProfileOverview from "../../views/admin/profile";
import StudentAdmissionList from "../../views/admin/studentmanagement/studentmanagementPanel/studentadmissionlist";
import RfidCardAssign from "../../views/admin/studentmanagement/studentmanagementPanel/rfidcardassign";
import SetFeeCategory from "../../views/admin/studentmanagement/studentmanagementPanel/setfeecategory";
import SMSWhatsappContactUpdate from "../../views/admin/studentmanagement/studentmanagementPanel/updatesmswhatsappcontactdetails";
import StudentProfileUpdate from "../../views/admin/studentmanagement/studentmanagementPanel/updatestudentdetails";
import StudentPhotoDocumentUpdate from "../../views/admin/studentmanagement/studentmanagementPanel/updatestudentphotodocumentdetails";
import SetClassInfoUpdate from "../../views/admin/studentmanagement/studentmanagementPanel/updateclassdetails";
import PromotionDemotion from "../../views/admin/studentmanagement/studentmanagementPanel/promotiondemotion";
import StudentLeft from "../../views/admin/studentmanagement/studentmanagementPanel/studentleft";
import UpdateStudentAdmissionDetails from "../../views/admin/studentmanagement/studentmanagementPanel/updatestudentadmissiondetails";
import StudentPhysicalFitness from "../../views/admin/studentmanagement/studentmanagementPanel/studentphysicalfitness";
import StudentMedicalFitness from "../../views/admin/studentmanagement/studentmanagementPanel/studentmedicalfitness";
import StudentsParentsBehaviour from "../../views/admin/studentmanagement/studentmanagementPanel/studentsparentbehaviour";
import UpdateEmployeeChildDetails from "../../views/admin/studentmanagement/studentmanagementPanel/updateemployeechilddetails";
import UpdateSiblingDetails from "../../views/admin/studentmanagement/studentmanagementPanel/updatesiblingdetails";
import SectionWiseStrengthReport from "../../views/admin/studentmanagement/studentmanagementReports/sectionwisestrengthreport";
import SectionStreamWiseStengthReport from "../../views/admin/studentmanagement/studentmanagementReports/sectionstreamwisestrengthreport";
import OverallStudentStrengthInfo from "../../views/admin/studentmanagement/studentmanagementReports/overallstudentstrengthinfo";
import GenderWiseStrengthReport from "../../views/admin/studentmanagement/studentmanagementReports/genderwisestrengthreport";
import ReligionWiseStrengthReport from "../../views/admin/studentmanagement/studentmanagementReports/religionwisestrengthreport";
import ReligionWiseStrengthReport2 from "../../views/admin/studentmanagement/studentmanagementReports/religionwisestrengthreport2";
import CategoryWiseStrengthReport from "../../views/admin/studentmanagement/studentmanagementReports/categorywisestrengthreport";
import CategoryWiseStrengthReport2 from "../../views/admin/studentmanagement/studentmanagementReports/categorywisestrengthreport2";
import StudentCasteWiseReport from "../../views/admin/studentmanagement/studentmanagementReports/studentcastewisereport";
import StudentVillageWiseReport from "../../views/admin/studentmanagement/studentmanagementReports/studentvillagewisereport";
import StudentBlockWiseReport from "../../views/admin/studentmanagement/studentmanagementReports/studentblockwisereport";
import StudentAddressWiseReport from "../../views/admin/studentmanagement/studentmanagementReports/studentaddresswisereport";
import NewRegistrationReports from "../../views/admin/studentmanagement/studentmanagementReports/newregistrationreports";
import AgeWiseStrengthReport from "../../views/admin/studentmanagement/studentmanagementReports/agewisestrengthreport";
import AgeWiseStrengthReport2 from "../../views/admin/studentmanagement/studentmanagementReports/agewisestrengthreport2";
import StreamWiseCategoryReport from "../../views/admin/studentmanagement/studentmanagementReports/streamwisecategoryreport";
import SiblingReport from "../../views/admin/studentmanagement/studentmanagementReports/siblingreport";
import AddEmployee from "../../views/admin/employeemanagement/employeemanagementpanel/addemployee";
import EmployeeList from "../../views/admin/employeemanagement/employeemanagementpanel/employeelist";
import EmployeeDroppedList from "../../views/admin/employeemanagement/employeemanagementpanel/employeedropped";
import EmployeeRfidAssign from "../../views/admin/employeemanagement/employeemanagementpanel/employeeRfidAssign";
import EmployeeAttendanceRegister from "../../views/admin/employeemanagement/employeemanagementpanel/employeeattendanceregister";
import UpdateEmployePhotoDocuments from "../../views/admin/employeemanagement/employeemanagementpanel/updateemployeephotodocuments";
import UpdateEmployeeProfile from "../../views/admin/employeemanagement/employeemanagementpanel/updateemployeeprofile";
import UpdateEmployeeSalaryInfo from "../../views/admin/employeemanagement/employeemanagementpanel/updateemployeesalaryinfo";
import GenerateStudentID from "../../views/admin/idcardmanagement/idcardmanagementpanel/generatestudentid";
import GenerateFatherID from "../../views/admin/idcardmanagement/idcardmanagementpanel/generatefatherid";
import GenerateMotherID from "../../views/admin/idcardmanagement/idcardmanagementpanel/generatemotherid";
import GenerateParentsCombineID from "../../views/admin/idcardmanagement/idcardmanagementpanel/generateparentscombineid";
import GenerateGuardianID from "../../views/admin/idcardmanagement/idcardmanagementpanel/generateguardianid";
import GenerateEmployeeID from "../../views/admin/idcardmanagement/idcardmanagementpanel/generateemployeeid";
import GenerateStudentHostelID from "../../views/admin/idcardmanagement/idcardmanagementpanel/generatestudenthostelid";
import GenerateBusID from "../../views/admin/idcardmanagement/idcardmanagementpanel/generatebusid";
import FillStudentAttendance from "../../views/admin/attendancemanagement/studentattendancepanel/fillstudentattendance";
import StudentAttendanceList from "../../views/admin/attendancemanagement/studentattendancepanel/studentattendancelist";
import StudentAttendanceGraphs from "../../views/admin/attendancemanagement/studentattendancepanel/attendancegraphs";
import StudentAttendanceAndSms from "../../views/admin/attendancemanagement/studentattendancepanel/studentattendancesms";
import FillEmployeeAttendance from "../../views/admin/attendancemanagement/employeeattendancepanel/fillemployeeattendance";
import EmployeeAttendanceList from "../../views/admin/attendancemanagement/employeeattendancepanel/employeeattendancelist";
import StudentRfidManagement from "../../views/admin/attendancemanagement/rfidattendancepanel/studentrfidmanagement";
import StudentRfidMachine from "../../views/admin/attendancemanagement/rfidattendancepanel/studentrfidmachine";
import EmployeeRfidMachine from "../../views/admin/attendancemanagement/rfidattendancepanel/employeerfidmachine";
import RfidMachine from "../../views/admin/attendancemanagement/rfidattendancepanel/rfidmachines";
import StudentAttendanceReportClassWise from "../../views/admin/attendancemanagement/studentsattendancereportpanel/studentattendancereportclasswise";
import StudentAttendanceReportGenderWise from "../../views/admin/attendancemanagement/studentsattendancereportpanel/dailystudentreportgenderwise";
import StudentWiseAttendanceReport from "../../views/admin/attendancemanagement/studentsattendancereportpanel/studentwiseattendancereport";
import EmployeeRfidManagement from "../../views/admin/attendancemanagement/rfidattendancepanel/employeerfidmanagement";
import DayWiseStudentMonthlyAttendance from "../../views/admin/attendancemanagement/studentsattendancereportpanel/daywisestudentmonthlyattendance";
import DayWiseWithTimeStudentMonthlyAttendance from "../../views/admin/attendancemanagement/studentsattendancereportpanel/withtimestudentmonthlyattendance";
import StudentAttendanceAnnually from "../../views/admin/attendancemanagement/studentsattendancereportpanel/studentattendanceannually";
import EmployeeAttendanceCategoryWise from "../../views/admin/attendancemanagement/employeesattendancereportpanel/categorywiseemployeeattendance";
import EmployeeAttendanceEmployeeWise from "../../views/admin/attendancemanagement/employeesattendancereportpanel/employeewiseemployeeattendance";
import DayWiseEmployeeMonthlyAttendance from "../../views/admin/attendancemanagement/employeesattendancereportpanel/daywiseemployeemonthlyattendance";
import DayWiseWithTimeEmployeeMonthlyAttendance from "../../views/admin/attendancemanagement/employeesattendancereportpanel/withtimeemployeemonthlyattendance";
import Translate from "../../components/multigual/Translate";

export type modules = {
  name: any;
  des?: string;
  icon: JSX.Element;
  icon2: JSX.Element;
  to: string;
  modules?: [];
};

export type Modules = {
  name: any;
  des?: string;
  icon: JSX.Element;
  icon2: JSX.Element;
  to: string;
  modules?: modules[];
};

export interface CoreModules {
  name: any;
  des?: string;
  icon: JSX.Element;
  icon2: JSX.Element;
  to: string;
  component?: any;
  modules?: Modules[];
}

interface CoreData {
  _id?: string;
  title?: string;
  nodes: CoreModules[];
}

const DashboardModules: CoreData[] | null = false ? [] : null;

const StudentManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "student.management.section.01",
        title: "Student Management Panel",
        nodes: [
          {
            name: "Student Registration Form",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/student-registration",
            component: <StudentRegistrationForm />,
            modules: [],
          },
          {
            name: "Student Registration List",
            icon: <LuUsers2 />,
            icon2: <LuUsers2  />,
            to: "/admin/student-management/student-registration-list",
            component: <StudentRegistrationList />,
            modules: [],
          },
          {
            name: "Student Admission List",
            icon: <LuUsers2 />,
            icon2: <LuUsers2  />,
            to: "/admin/student-management/student-admission-list",
            component: <StudentAdmissionList />,
            modules: [],
          },
          {
            name: "RFID Card Assign",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/rfid-card-assign",
            component: <RfidCardAssign />,
            modules: [],
          },
          {
            name: "Set Fee Category",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/set-fees-category",
            component: <SetFeeCategory />,
            modules: [],
          },
          {
            name: "Update SMS/Whatsapp Contact",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-sms-whatsapp-contact",
            component: <SMSWhatsappContactUpdate />,
            modules: [],
          },
          {
            name: "Update Student Details",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-student-details",
            component: <StudentProfileUpdate />,
            modules: [],
          },
          {
            name: "Update Photo & Document",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-student-photo-document",
            component: <StudentPhotoDocumentUpdate />,
            modules: [],
          },
          {
            name: "Update Class Details",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-class-details",
            component: <SetClassInfoUpdate />,
            modules: [],
          },
          {
            name: "Promotion/Demotion",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/promotion-demotion",
            component: <PromotionDemotion />,
            modules: [],
          },
          {
            name: "Student Left",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/student-left",
            component: <StudentLeft />,
            modules: [],
          },
          {
            name: "Update Student Admission Details",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-student-admission-details",
            component: <UpdateStudentAdmissionDetails />,
            modules: [],
          },
          {
            name: "Student Physical Fitness",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/student-physical-fitness",
            component: <StudentPhysicalFitness />,
            modules: [],
          },
          {
            name: "Student Medical Fitness",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/student-medical-fitness",
            component: <StudentMedicalFitness />,
            modules: [],
          },
          {
            name: "Student's Parents & Behaviour",
            icon: <LuUsers2 />,
            icon2: <LuUsers2  />,
            to: "/admin/student-management/students-parents-and-behaviour",
            component: <StudentsParentsBehaviour />,
            modules: [],
          },
          {
            name: "Update Employee Child Details",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-employee-child-details",
            component: <UpdateEmployeeChildDetails />,
            modules: [],
          },
          {
            name: "Update Sibling Details",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-sibling-details",
            component: <UpdateSiblingDetails />,
            modules: [],
          },
          {
            name: "Student Info",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/student-info",
            modules: [],
          },
          {
            name: "Students Activity",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/student-activity",
            modules: [],
          },
          {
            name: "Study Material",
            icon: <LuBookOpen />,
            icon2: <LuBookOpen  />,
            to: "/admin/student-management/study-material",
            modules: [],
          },
        ],
      },
      {
        _id: "student.management.section.02",
        title: "Student Reports Panel",
        nodes: [
          {
            name: "Section Wise Strength Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/section-wise-strength-report",
            component: <SectionWiseStrengthReport />,
            modules: [],
          },
          {
            name: "Section Stream Wise Strength Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/section-stream-wise-strength-report",
            component: <SectionStreamWiseStengthReport />,
            modules: [],
          },
          {
            name: "Overall Strength Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/overall-strength-report",
            component: <OverallStudentStrengthInfo />,
            modules: [],
          },
          {
            name: "Gender Wise Strength Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/gender-wise-strength-report",
            component: <GenderWiseStrengthReport />,
            modules: [],
          },
          {
            name: "Religion Wise Strength Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/religion-wise-strength-report",
            component: <ReligionWiseStrengthReport />,
            modules: [],
          },
          {
            name: "Religion Wise Strength Report-2",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/religion-wise-strength-report-2",
            component: <ReligionWiseStrengthReport2 />,
            modules: [],
          },
          {
            name: "Category Wise Strength Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/category-wise-strength-report",
            component: <CategoryWiseStrengthReport />,
            modules: [],
          },
          {
            name: "Category Wise Strength Report-2",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/category-wise-strength-report-2",
            component: <CategoryWiseStrengthReport2 />,
            modules: [],
          },
          {
            name: "Student Castewise Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/student-caste-wise-report",
            component: <StudentCasteWiseReport />,
            modules: [],
          },
          {
            name: "Student Villagewise Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/student-village-wise-report",
            component: <StudentVillageWiseReport />,
            modules: [],
          },
          {
            name: "Student Blockwise Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/student-block-city-wise-report",
            component: <StudentBlockWiseReport />,
            modules: [],
          },
          {
            name: "Student Address Wise Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/student-address-wise-report",
            component: <StudentAddressWiseReport />,
            modules: [],
          },
          {
            name: "New Registrations",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/new-registration-report",
            component: <NewRegistrationReports />,
            modules: [],
          },
          {
            name: "Agewise List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/age-wise-report",
            component: <AgeWiseStrengthReport />,
            modules: [],
          },
          {
            name: "Agewise List-2",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/age-wise-report-2",
            component: <AgeWiseStrengthReport2 />,
            modules: [],
          },
          {
            name: "Streamwise Category Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/stream-wise-category-report",
            component: <StreamWiseCategoryReport />,
            modules: [],
          },
          {
            name: "Sibling Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/siblings-report",
            component: <SiblingReport />,
            modules: [],
          },
        ],
      },
    ]
  : null;

const CertificateManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "certificate.management.section.01",
        title: "Certificates Form Panel",
        nodes: [
          {
            name: "Transfer Certificate Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Character Certificate Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Study Certificate Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Annual Fees Certificate Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Tution Fees Certificate Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Birth Certificate Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Event Certificate Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Sports Certificate Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Bonafide Certificate Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Caste Certificate Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Migration Certificate Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Performance/Excellence Certificate Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Student Of The Month Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },

          {
            name: "Best Student Award Form",
            icon: <LuClipboardSignature />,
            icon2: <LuClipboardSignature  />,
            to: "",
            component: <></>,
            modules: [],
          },
        ],
      },
      {
        _id: "certificate.management.section.02",
        title: "Certificates List Panel",
        nodes: [
          {
            name: "Transfer Certificate List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Character Certificate List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Study Certificate List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Annual Fees Certificate List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Tution Fees Certificate List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Birth Certificate List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Event Certificate List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Sports Certificate List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Bonafide Certificate List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Caste Certificate List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Migration Certificate List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Performance/Excellence Certificate List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Student Of The Month List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
          {
            name: "Best Student Award List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            component: <></>,
            modules: [],
          },
        ],
      },
    ]
  : null;

const IdCardManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "idcard.management.section.01",
        title: "ID Card Management Panel",
        nodes: [
          {
            name: "Student ID Generate",
            icon: <PiIdentificationBadge />,
            icon2: <PiIdentificationBadge  />,
            to: "/admin/id-card-management/generate-student-id",
            component: <GenerateStudentID/>,
            modules: [],
          },
          {
            name: "Father ID Generate",
            icon: <PiIdentificationBadge />,
            icon2: <PiIdentificationBadge  />,
            to: "/admin/id-card-management/generate-father-id",
            component: <GenerateFatherID/>,
            modules: [],
          },
          {
            name: "Mother ID Generate",
            icon: <PiIdentificationBadge />,
            icon2: <PiIdentificationBadge  />,
            to: "/admin/id-card-management/generate-mother-id",
            component: <GenerateMotherID/>,
            modules: [],
          },
          {
            name: "Both Combine (Father Mother)",
            icon: <PiIdentificationCard />,
            icon2: <PiIdentificationCard  />,
            to: "/admin/id-card-management/generate-parents-combine-id",
            component: <GenerateParentsCombineID/>,
            modules: [],
          },
          {
            name: "Guardian ID Generate",
            icon: <PiIdentificationBadge />,
            icon2: <PiIdentificationBadge  />,
            to: "/admin/id-card-management/generate-guardian-id",
            component: <GenerateGuardianID/>,
            modules: [],
          },
          {
            name: "Employee ID Generate",
            icon: <LuUserCheck2 />,
            icon2: <LuUserCheck2  />,
            to: "/admin/id-card-management/generate-employee-id",
            component: <GenerateEmployeeID/>,
            modules: [],
          },
          {
            name: "Hostel ID Card",
            icon: <PiIdentificationBadge />,
            icon2: <PiIdentificationBadge  />,
            to: "/admin/id-card-management/generate-student-hostel-id",
            component: <GenerateStudentHostelID/>,
            modules: [],
          },
          {
            name: "Bus ID Card",
            icon: <LuBus />,
            icon2: <LuBus  />,
            to: "/admin/id-card-management/generate-bus-id",
            component: <GenerateBusID/>,
            modules: [],
          },
        ],
      },
    ]
  : null;

const AttendanceManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "attendance.management.section.01",
        title: "Student Attendance Panel",
        nodes: [
          {
            name: "Student Attendance Fill",
            icon: <LuListChecks />,
            icon2: <LuListChecks  />,
            to: "/admin/attendance-management/fill-student-attendance",
            component:<FillStudentAttendance/>,
            modules: [],
          },
          {
            name: "Student Attendance List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "/admin/attendance-management/student-attendance-list",
            component:<StudentAttendanceList/>,
            modules: [],
          },
          {
            name: "Attendance Graphs",
            icon: <LuPieChart />,
            icon2: <LuPieChart  />,
            to: "/admin/attendance-management/student-attendance-report",
            component:<StudentAttendanceGraphs/>,
            modules: [],
          },
          {
            name: "Student ATT. & SMS",
            icon: <TiMessages />,
            icon2: <TiMessages  />,
            to: "/admin/attendance-management/student-attendance-and-sms",
            component:<StudentAttendanceAndSms/>,
            modules: [],
          },
        ],
      },
      {
        _id: "attendance.management.section.02",
        title: "Employee Attendance Panel",
        nodes: [
          {
            name: "Employee Attendance Fill",
            icon: <LuListChecks />,
            icon2: <LuListChecks  />,
            to: "/admin/attendance-management/fill-employee-attendance",
            component:<FillEmployeeAttendance/>,
            modules: [],
          },
          {
            name: "Employee Attendance List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "/admin/attendance-management/employee-attendance-list",
            component:<EmployeeAttendanceList/>,
            modules: [],
          },
        ],
      },
      {
        _id: "attendance.management.section.03",
        title: "RFID Attendance Panel",
        nodes: [
          {
            name: "Students RFID Management",
            icon: <LuUsers2 />,
            icon2: <LuUsers2  />,
            to: "/admin/attendance-management/student-rfid-management",
            component:<StudentRfidManagement/>,
            modules: [],
          },
          {
            name: "Employee RFID Management",
            icon: <LuUserCheck2 />,
            icon2: <LuUserCheck2  />,
            to: "/admin/attendance-management/employee-rfid-management",
            component:<EmployeeRfidManagement/>,
            modules: [],
          },
          {
            name: "Student RFID Machine",
            icon: <LuTablet />,
            icon2: <LuTablet  />,
            to: "/admin/attendance-management/student-rfid-machine",
            component:<StudentRfidMachine/>,
            modules: [],
          },
          {
            name: "Employee RFID Machine",
            icon: <LuTablet />,
            icon2: <LuTablet  />,
            to: "/admin/attendance-management/employee-rfid-machine",
            component:<EmployeeRfidMachine/>,
            modules: [],
          },
          {
            name: "Data Received From RFID Machine",
            icon: <LuDatabase />,
            icon2: <LuDatabase  />,
            to: "/admin/attendance-management/data-received-from-rfid-machine",
            component:<RfidMachine/>,
            modules: [],
          },
        ],
      },
      {
        _id: "attendance.management.section.04",
        title: "Students Attendance Report Panel",
        nodes: [
          {
            name: "Student Report (Class Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/student-attendance-report-class-wise",
            component:<StudentAttendanceReportClassWise/>,
            modules: [],
          },
          {
            name: "Daily Student Report (Gender Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/daily-student-attendance-report-gender-wise",
            component:<StudentAttendanceReportGenderWise/>,
            modules: [],
          },
          {
            name: "Attendance Report (Student Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/attendance-report-student-wise",
            component:<StudentWiseAttendanceReport/>,
            modules: [],
          },
          {
            name: "Student Attendance Monthly (Day Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/student-attendance-monthly-day-wise",
            component:<DayWiseStudentMonthlyAttendance/>,
            modules: [],
          },
          {
            name: "Student Attendance Annually",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/student-attendance-annually",
            component:<StudentAttendanceAnnually/>,
            modules: [],
          },
          {
            name: "Student Attendance Monthly (With Time)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/student-attendance-monthly-with-time",
            component:<DayWiseWithTimeStudentMonthlyAttendance/>,
            modules: [],
          },
        ],
      },
      {
        _id: "attendance.management.section.05",
        title: "Employee Attendance Report Panel",
        nodes: [
          {
            name: "Employee Report (Category Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/employee-attendance-report-category-wise",
            component:<EmployeeAttendanceCategoryWise/>,
            modules: [],
          },
          {
            name: "Employee Report (Employee Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/employee-attendance-report-employee-wise",
            component:<EmployeeAttendanceEmployeeWise/>,
            modules: [],
          },
          {
            name: "Employee Attendance Monthly (Day Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/employee-attendance-monthly-day-wise",
            component:<DayWiseEmployeeMonthlyAttendance/>,
            modules: [],
          },
          {
            name: "Employee Attendance Monthly (With Time)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/employee-attendance-monthly-with-time",
            component:<DayWiseWithTimeEmployeeMonthlyAttendance/>,
            modules: [],
          },
        ],
      },
      {
        _id: "attendance.management.section.06",
        title: "Bus And Van Attendance Panel",
        nodes: [
          {
            name: "Bus And Van Student Attendance Fill",
            icon: <LuListChecks />,
            icon2: <LuListChecks  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus And Van Student Attendance List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus And Van Student RFID",
            icon: <LuTablet />,
            icon2: <LuTablet  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus And Van Student ATT. & SMS",
            icon: <TiMessages />,
            icon2: <TiMessages  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "attendance.management.section.07",
        title: "Hostel Attendance Panel",
        nodes: [
          {
            name: "Hostel Student Attendance Fill",
            icon: <LuListChecks />,
            icon2: <LuListChecks  />,
            to: "",
            modules: [],
          },
          {
            name: "Hostel Student Attendance List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Hostel Student RFID",
            icon: <LuTablet />,
            icon2: <LuTablet  />,
            to: "",
            modules: [],
          },
          {
            name: "Hostel Student ATT. & SMS",
            icon: <TiMessages />,
            icon2: <TiMessages  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const LeaveManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "leave.management.section.01",
        title: "Leave Management Panel",
        nodes: [
          {
            name: "Student Leave",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "",
            modules: [],
          },
          {
            name: "Student Leave List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Employee Leave",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "",
            modules: [],
          },
          {
            name: "Employee Leave List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Employee Leave Balance",
            icon: <LuCalculator />,
            icon2: <LuCalculator  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const EmployeeManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "Employee.management.section.01",
        title: "Employee Management Panel",
        nodes: [
          {
            name: "Add Employee",
            icon: <LuUserPlus2 />,
            icon2: <LuUserPlus2  />,
            to: "/admin/employee-management/add-employee",
            component: <AddEmployee />,
            modules: [],
          },
          {
            name: "Employee List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "/admin/employee-management/employee-list",
            component: <EmployeeList />,
            modules: [],
          },
          {
            name: "Dropped List",
            icon: <LuUserX2 />,
            icon2: <LuUserX2  />,
            to: "/admin/employee-management/dropped-employee-list",
            component: <EmployeeDroppedList />,
            modules: [],
          },
          {
            name: "RFID Card Assign",
            icon: <LuTablet />,
            icon2: <LuTablet  />,
            to: "/admin/employee-management/employee-rfid-card-assign",
            component: <EmployeeRfidAssign />,
            modules: [],
          },
          {
            name: "Attendance Register",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/employee-management/employee-attendance-register",
            component: <EmployeeAttendanceRegister />,
            modules: [],
          },
          {
            name: "Photo And Document Update",
            icon: <LuUserSquare2 />,
            icon2: <LuUserSquare2  />,
            to: "/admin/employee-management/update-employee-photo-document",
            component: <UpdateEmployePhotoDocuments />,
            modules: [],
          },
          {
            name: "Employee Profile Update",
            icon: <LuUserCog2 />,
            icon2: <LuUserCog2  />,
            to: "/admin/employee-management/update-employee-profile",
            component:<UpdateEmployeeProfile/>,
            modules: [],
          },
          {
            name: "Salary Info Update",
            icon: <PiMoney />,
            icon2: <PiMoney  />,
            to: "/admin/employee-management/update-employee-salary-info",
            component:<UpdateEmployeeSalaryInfo/>,
            modules: [],
          },
        ],
      },
    ]
  : null;

const FeesManagementModules = true
  ? [
      {
        _id: "fees.management.section.01",
        title: "Fees Management Panel",
        nodes: [
          {
            name: "Fees",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/fees",
          },
          {
            name: "Transport Fees",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/transport-fees",
            modules: [],
          },
          {
            name: "Combine Fees",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/combine-transport",
            modules: [],
          },
          {
            name: "Hostel Fees",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/hostel-fees",
            modules: [],
          },
          {
            name: "Other Fees",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/other-fees",
            modules: [],
          },
          {
            name: "Previous Fees",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/previous-fees",
            modules: [],
          },
          {
            name: "Fees Reports",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/fees-reports",
            modules: [],
          },
          {
            name: "Dues Management & SMS",
            icon: <TbMessageDollar />,
            icon2: <TbMessageDollar  />,
            to: "/admin/fees-management/dues-management",
            modules: [],
          },
          {
            name: "Penalty & Caution Money",
            icon: <LuHourglass />,
            icon2: <LuHourglass  />,
            to: "/admin/fees-management/penalty-caution-money-management",
            modules: [],
          },
        ],
      },
    ]
  : null;

const AccountManagementModules = true
  ? [
      {
        _id: "account.management.section.01",
        title: "Account Management Panel",
        nodes: [
          {
            name: "Stock Management",
            icon: <LuBox />,
            icon2: <LuBox  />,
            to: "/admin/account-management/stock-management",
            modules: [],
          },
          {
            name: "Assets Management",
            icon: <LuListOrdered />,
            icon2: <LuListOrdered  />,
            to: "/admin/account-management/assets-management",
            modules: [],
          },
        ],
      },
    ]
  : null;

const TextAndWhatsappManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "textwhatsapp.management.section.01",
        title: "Text Messages Management Panel",
        nodes: [
          {
            name: "Holiday SMS",
            icon: <TbMessage />,
            icon2: <TbMessage  />,
            to: "",
            modules: [],
          },
          {
            name: "Birthday SMS",
            icon: <TbMessage />,
            icon2: <TbMessage  />,
            to: "",
            modules: [],
          },
          {
            name: "App Messages",
            icon: <TbMessage />,
            icon2: <TbMessage  />,
            to: "",
            modules: [],
          },
          {
            name: "App Messages List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Delivery Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Notification List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "textwhatsapp.management.section.01",
        title: "Whatsapp Messeges Management Panel",
        nodes: [
          {
            name: "Student Whatsapp Message",
            icon: <TiMessages />,
            icon2: <TiMessages  />,
            to: "",
            modules: [],
          },
          {
            name: "Employee Whatsapp Message",
            icon: <TiMessages />,
            icon2: <TiMessages  />,
            to: "",
            modules: [],
          },
          {
            name: "Whatsapp Delivery",
            icon: <TiMessages />,
            icon2: <TiMessages  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const NotificationManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "notification.management.section.01 ",
        title: "Notification Management Panel",
        nodes: [
          {
            name: "Add Notification",
            icon: <LuBellPlus />,
            icon2: <LuBellPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Notification List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const PrincipalDeskModules: CoreData[] | null = true
  ? [
      {
        _id: "principaldesk.management.section.01",
        title: "Principal Desk Panel",
        nodes: [
          {
            name: "Today's Fees Collection Info",
            icon: <PiMoney />,
            icon2: <PiMoney  />,
            to: "",
            modules: [],
          },
          {
            name: "Today's Birthdays",
            icon: <LuCake />,
            icon2: <LuCake  />,
            to: "",
            modules: [],
          },
          {
            name: "Attendance Info",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Test List Info",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Attendance Graph",
            icon: <LuPieChart />,
            icon2: <LuPieChart  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const TimeTableModules: CoreData[] | null = true
  ? [
      {
        _id: "timetable.management.section.01",
        title: "Time Table Management Panel",
        nodes: [
          {
            name: "Class Period",
            icon: <LuTable />,
            icon2: <LuTable  />,
            to: "",
            modules: [],
          },
          {
            name: "Add Time Table",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Time Table List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "timetable.management.section.02",
        title: "View Time Tables",
        nodes: [
          {
            name: "Teacher Wise (Day Wise)",
            icon: <LuTable />,
            icon2: <LuTable  />,
            to: "",
            modules: [],
          },
          {
            name: "Daywise Time Table",
            icon: <LuTable />,
            icon2: <LuTable  />,
            to: "",
            modules: [],
          },
          {
            name: "Teacher Wise Time Table",
            icon: <LuTable />,
            icon2: <LuTable  />,
            to: "",
            modules: [],
          },
          {
            name: "Class Wise Time Table",
            icon: <LuTable />,
            icon2: <LuTable  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const HomeworkManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "homework.management.section.01",
        title: "Homework Management Panel",
        nodes: [
          {
            name: "Add Homework",
            icon: <LuPenSquare />,
            icon2: <LuPenSquare  />,
            to: "",
            modules: [],
          },
          {
            name: "Homework List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Send Whatsapp Homework",
            icon: <TiMessages />,
            icon2: <TiMessages  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "homework.management.section.02",
        title: "Homework Report Panel",
        nodes: [
          {
            name: "Teacher Wise Homework Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const ClassworkManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "classwork.management.section.01",
        title: "Classwork Management Panel",
        nodes: [
          {
            name: "Add Classwork",
            icon: <LuPenSquare />,
            icon2: <LuPenSquare  />,
            to: "",
            modules: [],
          },
          {
            name: "Classwork List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Send Whatsapp Classwork",
            icon: <TiMessages />,
            icon2: <TiMessages  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const BusVanManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "busvan.management.section.01",
        title: "Bus Management Panel",
        nodes: [
          {
            name: "Add Bus",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus Details",
            icon: <LuBus />,
            icon2: <LuBus  />,
            to: "",
            modules: [],
          },
          {
            name: "Student Stop Assign",
            icon: <LuXOctagon />,
            icon2: <LuXOctagon  />,
            to: "",
            modules: [],
          },
          {
            name: "Assign Student Route",
            icon: <LuMapPin />,
            icon2: <LuMapPin  />,
            to: "",
            modules: [],
          },
          {
            name: "Student List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus Employee",
            icon: <LuUsers2 />,
            icon2: <LuUsers2  />,
            to: "",
            modules: [],
          },
          {
            name: "Assign Bus Driver",
            icon: <LuUserPlus2 />,
            icon2: <LuUserPlus2  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "busvan.management.section.02",
        title: "Van Management Panel",
        nodes: [
          {
            name: "Add Van",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Van Details",
            icon: <PiVan />,
            icon2: <PiVan  />,
            to: "",
            modules: [],
          },
          {
            name: "Student Stop Assign",
            icon: <LuXOctagon />,
            icon2: <LuXOctagon  />,
            to: "",
            modules: [],
          },
          {
            name: "Assign Student Route",
            icon: <LuMapPin />,
            icon2: <LuMapPin  />,
            to: "",
            modules: [],
          },
          {
            name: "Student List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Van Employee",
            icon: <LuUsers2 />,
            icon2: <LuUsers2  />,
            to: "",
            modules: [],
          },
          {
            name: "Assign Van Driver",
            icon: <LuUserPlus2 />,
            icon2: <LuUserPlus2  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "busvan.management.section.03",
        title: "Routes Management Panel",
        nodes: [
          {
            name: "Add Route",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Add Stop",
            icon: <LuXOctagon />,
            icon2: <LuXOctagon  />,
            to: "",
            modules: [],
          },
          {
            name: "Assign Stop To Route",
            icon: <LuXOctagon />,
            icon2: <LuXOctagon  />,
            to: "",
            modules: [],
          },
          {
            name: "Assign Bus To Route",
            icon: <LuBus />,
            icon2: <LuBus  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "busvan.management.section.04",
        title: "Bus Reports Panel",
        nodes: [
          {
            name: "Route List (Stop Wise)",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Route List (Bus Wise)",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Stops List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus Students List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus Driver Route Info",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "busvan.management.section.05",
        title: "Van Reports Panel",
        nodes: [
          {
            name: "Route List (Stop Wise)",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Route List (Bus Wise)",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Stops List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Van Students List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Van Driver Route Info",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "busvan.management.section.06",
        title: "Bus Location Service Panel",
        nodes: [
          {
            name: "Bus Current Location",
            icon: <LuMapPin />,
            icon2: <LuMapPin  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus Live Location",
            icon: <LuMapPin />,
            icon2: <LuMapPin  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus Route",
            icon: <LuBus />,
            icon2: <LuBus  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "busvan.management.section.07",
        title: "Van Location Service Panel",
        nodes: [
          {
            name: "Van Current Location",
            icon: <LuMapPin />,
            icon2: <LuMapPin  />,
            to: "",
            modules: [],
          },
          {
            name: "Van Live Location",
            icon: <LuMapPin />,
            icon2: <LuMapPin  />,
            to: "",
            modules: [],
          },
          {
            name: "Van Route",
            icon: <PiVan />,
            icon2: <PiVan  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "busvan.management.section.08",
        title: "Bus Expense Panel",
        nodes: [
          {
            name: "Add Bus Expense",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus Expense List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus Expense Head",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "busvan.management.section.09",
        title: "Van Expense Panel",
        nodes: [
          {
            name: "Add Bus Expense",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus Expense List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Bus Expense Head",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const ReminderManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "reminder.management.section.01",
        title: "Reminders Panel",
        nodes: [
          {
            name: "Add Reminder",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Reminder List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "reminder.management.section.02",
        title: "Tasks Panel",
        nodes: [
          {
            name: "Add Task",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Tasks List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const EnquiryManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "enquiry.management.section.01",
        title: "Admission Enquiries Panel",
        nodes: [
          {
            name: "New Enquiries",
            icon: <TbMessageQuestion />,
            icon2: <TbMessageQuestion  />,
            to: "",
            modules: [],
          },
          {
            name: "Enquiries List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "enquiry.management.section.02",
        title: "Job Enquiries Panel",
        nodes: [
          {
            name: "New Enquiries",
            icon: <TbMessageQuestion />,
            icon2: <TbMessageQuestion  />,
            to: "",
            modules: [],
          },
          {
            name: "Enquiries List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "enquiry.management.section.03",
        title: "Others Enquiries Panel",
        nodes: [
          {
            name: "New Enquiries",
            icon: <TbMessageQuestion />,
            icon2: <TbMessageQuestion  />,
            to: "",
            modules: [],
          },
          {
            name: "Enquiries List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "enquiry.management.section.04",
        title: "Enquiries Via Call Panel",
        nodes: [
          {
            name: "Call Enquiries",
            icon: <LuPhone />,
            icon2: <LuPhone  />,
            to: "",
            modules: [],
          },
          {
            name: "Call Enquiries History",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const ComplaintManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "complaint.management.section.01",
        title: "Complaint Management Panel",
        nodes: [
          {
            name: "Employee Complaint List By Parents",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Student Complaint List By Parents",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Query List By Parents",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Feedback List By Parents",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Student Complaint By Teacher",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Student Feedback By Teacher",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Student Feedback List By Teacher",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Student Notice By Teacher",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Student Notice List By Teacher",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Add Month's Performance",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Performance Parameter",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Performance Marks",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const ApplicationManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "application.management.section.01",
        title: "Application Management Panel",
        nodes: [
          {
            name: "Add Quotes/Offer/Poster",
            icon: <PiImage />,
            icon2: <PiImage  />,
            to: "",
            modules: [],
          },
          {
            name: "Quotes/Offer/Poster List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "App Alert",
            icon: <LuAlertCircle />,
            icon2: <LuAlertCircle  />,
            to: "",
            modules: [],
          },
          {
            name: "Student App Block",
            icon: <LuBan />,
            icon2: <LuBan  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "application.management.section.02",
        title: "Student App Management",
        nodes: [
          {
            name: "Student's App Rights",
            icon: <IoPhonePortraitOutline />,
            icon2: <IoPhonePortraitOutline  />,
            to: "",
            modules: [],
          },
          {
            name: "Student's App Rights (Student Wise)",
            icon: <IoPhonePortraitOutline />,
            icon2: <IoPhonePortraitOutline  />,
            to: "",
            modules: [],
          },
          {
            name: "Generate Student's Password",
            icon: <LuEye />,
            icon2: <LuEye  />,
            to: "",
            modules: [],
          },
          {
            name: "Update Student's Password",
            icon: <LuEye />,
            icon2: <LuEye  />,
            to: "",
            modules: [],
          },
          {
            name: "Send ID Password",
            icon: <LuSend />,
            icon2: <LuSend  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "application.management.section.03",
        title: "Employee App Management",
        nodes: [
          {
            name: "Employee's App Rights",
            icon: <IoPhonePortraitOutline />,
            icon2: <IoPhonePortraitOutline  />,
            to: "",
            modules: [],
          },
          {
            name: "Employee's App Rights (Employee Wise)",
            icon: <IoPhonePortraitOutline />,
            icon2: <IoPhonePortraitOutline  />,
            to: "",
            modules: [],
          },
          {
            name: "Generate Employee's Password",
            icon: <LuEye />,
            icon2: <LuEye  />,
            to: "",
            modules: [],
          },
          {
            name: "Update Employee's Password",
            icon: <LuEye />,
            icon2: <LuEye  />,
            to: "",
            modules: [],
          },
          {
            name: "Send ID Password",
            icon: <LuSend />,
            icon2: <LuSend  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "application.management.section.04",
        title: "Login Details Panel",
        nodes: [
          {
            name: "Student App Login Details",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Student App Login Count",
            icon: <h5>769</h5>,
            icon2: (
              <h5 style={{ fontSize: "1.6em", fontWeight: "500" }}>769</h5>
            ),
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const ManageAccessModules: CoreData[] | null = true
  ? [
      {
        _id: "manage-access.section.01",
        title: "Access Management Panel",
        nodes: [
          {
            name: "Add User",
            icon: <LuUserPlus2 />,
            icon2: <LuUserPlus2  />,
            to: "",
            modules: [],
          },
          {
            name: "Users List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "",
            modules: [],
          },
          {
            name: "Users List Download",
            icon: <LuDownload />,
            icon2: <LuDownload  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const ExaminationManagementModules = true
  ? [
      {
        _id: "examination.management.section.01",
        title: "Examination Management Panel",
        nodes: [
          {
            name: "Examination Management",
            icon: <PiExam />,
            icon2: <PiExam  />,
            to: "/admin/examination/examination-management",
            modules: [],
          },
          {
            name: "Monthly Test",
            icon: <PiExam />,
            icon2: <PiExam  />,
            to: "/admin/examination/monthly-exams",
            modules: [],
          },
          {
            name: "Weekly/Surprise Test",
            icon: <PiExam />,
            icon2: <PiExam  />,
            to: "/admin/examination/weekly-surprise-exams",
            modules: [],
          },
          {
            name: "Exam Results",
            icon: <PiStudent />,
            icon2: <PiStudent  />,
            to: "/admin/examination/exam-results",
            modules: [],
          },

          {
            name: "Exam Paper Setter",
            icon: <LuPenLine />,
            icon2: <LuPenLine  />,
            to: "/admin/examination/exam-paper-setter",
            modules: [],
          },
          {
            name: "Conduct Online Exam",
            icon: <PiExam />,
            icon2: <PiExam  />,
            to: "/admin/examination/conduct-online-exam",
            modules: [],
          },
        ],
      },
    ]
  : null;

const SchoolInfoModules: CoreData[] | null = true
  ? [
      {
        _id: "school.info.section.01",
        title: "School Info Panel",
        nodes: [
          {
            name: "School General Info",
            icon: <LuPenSquare />,
            icon2: <LuPenSquare  />,
            to: "",
            modules: [],
          },
          {
            name: "Add House",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Add Student Category",
            icon: <LuUserPlus2 />,
            icon2: <LuUserPlus2  />,
            to: "",
            modules: [],
          },
          {
            name: "Add Department",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Add Designation",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "school.info.section.02",
        title: "Session Management Panel",
        nodes: [
          {
            name: "School Calendar",
            icon: <LuCalendarDays />,
            icon2: <LuCalendarDays  />,
            to: "/admin/school-calendar",
            modules: [],
          },
          {
            name: "Session Management",
            icon: <LuCalendarClock />,
            icon2: <LuCalendarClock  />,
            to: "/admin/session-management",
            modules: [],
          },
        ],
      },
      {
        _id: "school.info.section.03",
        title: "Class Stream Management Panel",
        nodes: [
          {
            name: "Class Info",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Add Section",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Add Stream",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Add Group",
            icon: <LuPlus />,
            icon2: <LuPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Class Status",
            icon: <HiOutlineStatusOnline />,
            icon2: <HiOutlineStatusOnline  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "school.info.section.04",
        title: "Subject Management Panel",
        nodes: [
          {
            name: "Add Subject",
            icon: <LuBookPlus />,
            icon2: <LuBookPlus  />,
            to: "",
            modules: [],
          },
          {
            name: "Subjects (Class Wise)",
            icon: <LuBookCopy />,
            icon2: <LuBookCopy  />,
            to: "",
            modules: [],
          },
          {
            name: "Subject Order/Preference",
            icon: <LuBookTemplate />,
            icon2: <LuBookTemplate  />,
            to: "",
            modules: [],
          },
        ],
      },
      {
        _id: "school.info.section.05",
        title: "School Memories",
        nodes: [
          {
            name: "Gallery Management",
            icon: <LuGalleryHorizontalEnd />,
            icon2: <LuGalleryHorizontalEnd  />,
            to: "/admin/gallery-management",
            modules: [],
          },
        ],
      },
    ]
  : null;

const DownloadDataModules: CoreData[] | null = true
  ? [
      {
        _id: "download.data.section.01",
        title: "Download Data Panel",
        nodes: [
          {
            name: "Students List",
            icon: <LuDownload />,
            icon2: <LuDownload  />,
            to: "",
            modules: [],
          },
          {
            name: "Students Registration List",
            icon: <LuDownload />,
            icon2: <LuDownload  />,
            to: "",
            modules: [],
          },
          {
            name: "Employees List",
            icon: <LuDownload />,
            icon2: <LuDownload  />,
            to: "",
            modules: [],
          },
          {
            name: "Students Birthday List",
            icon: <LuDownload />,
            icon2: <LuDownload  />,
            to: "",
            modules: [],
          },
          {
            name: "Employees Birthday List",
            icon: <LuDownload />,
            icon2: <LuDownload  />,
            to: "",
            modules: [],
          },
          {
            name: "Student's Documents List",
            icon: <LuDownload />,
            icon2: <LuDownload  />,
            to: "",
            modules: [],
          },
          {
            name: "Student's Documents Download",
            icon: <LuDownload />,
            icon2: <LuDownload  />,
            to: "",
            modules: [],
          },
          {
            name: "Employee's Documents List",
            icon: <LuDownload />,
            icon2: <LuDownload  />,
            to: "",
            modules: [],
          },
          {
            name: "Employee's Documents Downloadt",
            icon: <LuDownload />,
            icon2: <LuDownload  />,
            to: "",
            modules: [],
          },
          {
            name: "Download Main Fees Structure",
            icon: <LuDownload />,
            icon2: <LuDownload  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const RecyclebinManagementModules: CoreData[] | null = true
  ? [
      {
        _id: "recyclebin.management.section.01",
        title: "Recyclebin Management Panel",
        nodes: [
          {
            name: "Students Registration List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Students Admission List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Employee List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const SoftwareManagementModules = true
  ? [
      {
        _id: "",
        title: "",
        nodes: [
          {
            name: "Software Settings",
            icon: <LuSettings />,
            icon2: <LuSettings  />,
            to: "/admin/software-settings",
            modules: [],
          },
          {
            name: "Software Backup & Security",
            icon: <LuDatabaseBackup />,
            icon2: <LuDatabaseBackup  />,
            to: "/admin/software-backup-security",
            modules: [],
          },
          {
            name: "Software Training Videos",
            icon: <LuYoutube />,
            icon2: <LuYoutube  />,
            to: "/admin/software-training-videos",
            modules: [],
          },
          {
            name: "Software Support",
            icon: <LuUserCircle2 />,
            icon2: <LuUserCircle2  />,
            to: "/admin/software-support",
            modules: [],
          },
        ],
      },
    ]
  : null;

const GovernmentRequirementModules: CoreData[] | null = true
  ? [
      {
        _id: "government.requirement.section.01",
        title: "Government's Requirement Panel",
        nodes: [
          {
            name: "Mapping List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Students List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "",
            modules: [],
          },
          {
            name: "Contact No.",
            icon: <LuPhone />,
            icon2: <LuPhone  />,
            to: "",
            modules: [],
          },
        ],
      },
    ]
  : null;

const modulesData: CoreData[] = [
  {
    _id: "section.01",
    title: "Dashboard",
    nodes: [
      {
        name: <Translate en="Dashboard" gu="ડેશબોર્ડ" hi="डैशबोर्ड" />,
        icon: <LuLayoutDashboard />,
        icon2: <LuLayoutDashboard  />,
        to: "/admin/dashboard",
        component: <Dashboard modules={DashboardModules} />,
        modules: [],
      },
    ],
  },
  {
    _id: "section.02",
    title: "Student Management",
    nodes: [
      {
        name: "Student Management",
        icon: <LuUsers2 />,
        icon2: <LuUsers2  />,
        to: "/admin/student-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/student-management",
              data: StudentManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [
          {
            name: "Student Registration Form",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/student-registration",
            modules: [],
          },
          {
            name: "Student Registration List",
            icon: <LuUsers2 />,
            icon2: <LuUsers2  />,
            to: "/admin/student-management/student-registration-list",
            modules: [],
          },
          {
            name: "Student Admission List",
            icon: <LuUsers2 />,
            icon2: <LuUsers2  />,
            to: "/admin/student-management/student-admission-list",
            modules: [],
          },
          {
            name: "RFID Card Assign",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/rfid-card-assign",
            modules: [],
          },
          {
            name: "Set Fee Category",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/set-fees-category",
            modules: [],
          },
          {
            name: "Update SMS/Whatsapp Contact",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-sms-whatsapp-contact",
            modules: [],
          },
          {
            name: "Update Student Details",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-student-details",
            modules: [],
          },
          {
            name: "Update Photo & Document",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-student-photo-document",
            modules: [],
          },
          {
            name: "Update Class Details",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-class-details",
            modules: [],
          },
          {
            name: "Promotion/Demotion",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/promotion-demotion",
            modules: [],
          },
          {
            name: "Student Left",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/student-left",
            modules: [],
          },
          {
            name: "Update Student Admission Details",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-student-admission-details",
            modules: [],
          },
          {
            name: "Student Physical Fitness",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/student-physical-fitness",
            modules: [],
          },
          {
            name: "Student Medical Fitness",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/student-medical-fitness",
            modules: [],
          },
          {
            name: "Student's Parents & Behaviour",
            icon: <LuUsers2 />,
            icon2: <LuUsers2  />,
            to: "/admin/student-management/students-parents-and-behaviour",
            modules: [],
          },
          {
            name: "Update Employee Child Details",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-employee-child-details",
            modules: [],
          },
          {
            name: "Update Sibling Details",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/update-sibling-details",
            modules: [],
          },
          {
            name: "Student Info",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/student-info",
            modules: [],
          },
          {
            name: "Students Activity",
            icon: <LuUser2 />,
            icon2: <LuUser2  />,
            to: "/admin/student-management/student-activity",
            modules: [],
          },
          {
            name: "Study Material",
            icon: <LuBookOpen />,
            icon2: <LuBookOpen  />,
            to: "/admin/student-management/study-material",
            modules: [],
          },

          {
            name: "Section Wise Strength Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/section-wise-strength-report",
            modules: [],
          },
          {
            name: "Section Stream Wise Strength Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/section-stream-wise-strength-report",
            modules: [],
          },
          {
            name: "Overall Strength Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/overall-strength-report",
            modules: [],
          },
          {
            name: "Gender Wise Strength Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/gender-wise-strength-report",
            modules: [],
          },
          {
            name: "Religion Wise Strength Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/religion-wise-strength-report",
            modules: [],
          },
          {
            name: "Religion Wise Strength Report-2",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/religion-wise-strength-report-2",
            modules: [],
          },
          {
            name: "Category Wise Strength Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/category-wise-strength-report",
            modules: [],
          },
          {
            name: "Category Wise Strength Report-2",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/category-wise-strength-report-2",
            modules: [],
          },
          {
            name: "Student Castewise Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/student-caste-wise-report",
            modules: [],
          },
          {
            name: "Student Villagewise Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/student-village-wise-report",
            modules: [],
          },
          {
            name: "Student Blockwise Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/student-block-city-wise-report",
            modules: [],
          },
          {
            name: "Student Address Wise Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/student-address-wise-report",
            modules: [],
          },
          {
            name: "New Registrations",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/new-registration-report",
            modules: [],
          },
          {
            name: "Agewise List",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/age-wise-report",
            modules: [],
          },
          {
            name: "Agewise List-2",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/age-wise-report-2",
            modules: [],
          },
          {
            name: "Streamwise Category Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/stream-wise-category-report",
            modules: [],
          },
          {
            name: "Sibling Report",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/student-management/siblings-report",
            modules: [],
          },
        ],
      },
      {
        name: "Certificate Management",
        icon: <PiCertificate />,
        icon2: <PiCertificate  />,
        to: "/admin/certificate-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/certificate-management",
              data: CertificateManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
      {
        name: "ID Card Management",
        icon: <PiIdentificationBadge />,
        icon2: <PiIdentificationBadge  />,
        to: "/admin/id-card-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/id-card-management",
              data: IdCardManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [
          {
            name: "Student ID Generate",
            icon: <PiIdentificationBadge />,
            icon2: <PiIdentificationBadge  />,
            to: "/admin/id-card-management/generate-student-id",
            modules: [],
          },
          {
            name: "Father ID Generate",
            icon: <PiIdentificationBadge />,
            icon2: <PiIdentificationBadge  />,
            to: "/admin/id-card-management/generate-father-id",
            modules: [],
          },
          {
            name: "Mother ID Generate",
            icon: <PiIdentificationBadge />,
            icon2: <PiIdentificationBadge  />,
            to: "/admin/id-card-management/generate-mother-id",
            modules: [],
          },
          {
            name: "Both Combine (Father Mother)",
            icon: <PiIdentificationCard />,
            icon2: <PiIdentificationCard  />,
            to: "/admin/id-card-management/generate-parents-combine-id",
            modules: [],
          },
          {
            name: "Guardian ID Generate",
            icon: <PiIdentificationBadge />,
            icon2: <PiIdentificationBadge  />,
            to: "/admin/id-card-management/generate-guardian-id",
            modules: [],
          },
          {
            name: "Employee ID Generate",
            icon: <LuUserCheck2 />,
            icon2: <LuUserCheck2  />,
            to: "/admin/id-card-management/generate-employee-id",
            modules: [],
          },
          {
            name: "Hostel ID Card",
            icon: <PiIdentificationBadge />,
            icon2: <PiIdentificationBadge  />,
            to: "/admin/id-card-management/generate-student-hostel-id",
            modules: [],
          },
          {
            name: "Bus ID Card",
            icon: <LuBus />,
            icon2: <LuBus  />,
            to: "/admin/id-card-management/generate-bus-id",
            modules: [],
          },
        ],
      },
    ],
  },
  {
    _id: "section.03",
    title: "Attendance Management",
    nodes: [
      {
        name: "Attendance Management",
        icon: <LuListChecks />,
        icon2: <LuListChecks  />,
        to: "/admin/attendance-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/attendance-management",
              data: AttendanceManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [
          {
            name: "Student Attendance Fill",
            icon: <LuListChecks />,
            icon2: <LuListChecks  />,
            to: "/admin/attendance-management/fill-student-attendance",
            modules: [],
          },
          {
            name: "Student Attendance List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "/admin/attendance-management/student-attendance-list",
            modules: [],
          },
          {
            name: "Attendance Graphs",
            icon: <LuPieChart />,
            icon2: <LuPieChart  />,
            to: "/admin/attendance-management/student-attendance-report",
            modules: [],
          },
          {
            name: "Student ATT. & SMS",
            icon: <TiMessages />,
            icon2: <TiMessages  />,
            to: "/admin/attendance-management/student-attendance-and-sms",
            modules: [],
          },
          {
            name: "Employee Attendance Fill",
            icon: <LuListChecks />,
            icon2: <LuListChecks  />,
            to: "/admin/attendance-management/fill-employee-attendance",
            modules: [],
          },
          {
            name: "Employee Attendance List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "/admin/attendance-management/employee-attendance-list",
            modules: [],
          },
          {
            name: "Students RFID Management",
            icon: <LuUsers2 />,
            icon2: <LuUsers2  />,
            to: "/admin/attendance-management/student-rfid-management",
            modules: [],
          },
          {
            name: "Employee RFID Management",
            icon: <LuUserCheck2 />,
            icon2: <LuUserCheck2  />,
            to: "/admin/attendance-management/employee-rfid-management",
            modules: [],
          },
          {
            name: "Student RFID Machine",
            icon: <LuTablet />,
            icon2: <LuTablet  />,
            to: "/admin/attendance-management/student-rfid-machine",
            modules: [],
          },
          {
            name: "Employee RFID Machine",
            icon: <LuTablet />,
            icon2: <LuTablet  />,
            to: "/admin/attendance-management/employee-rfid-machine",
            modules: [],
          },
          {
            name: "Data Received From RFID Machine",
            icon: <LuDatabase />,
            icon2: <LuDatabase  />,
            to: "/admin/attendance-management/data-received-from-rfid-machine",
            modules: [],
          },
          {
            name: "Student Report (Class Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/student-attendance-report-class-wise",
            modules: [],
          },
          {
            name: "Daily Student Report (Gender Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/daily-student-attendance-report-gender-wise",
            modules: [],
          },
          {
            name: "Attendance Report (Student Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/attendance-report-student-wise",
            modules: [],
          },
          {
            name: "Student Attendance Monthly (Day Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/student-attendance-monthly-day-wise",
            modules: [],
          },
          {
            name: "Student Attendance Annually",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/student-attendance-annually",
            modules: [],
          },
          {
            name: "Student Attendance Monthly (With Time)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/student-attendance-monthly-with-time",
            modules: [],
          },
          {
            name: "Employee Report (Category Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/employee-attendance-report-category-wise",
            modules: [],
          },
          {
            name: "Employee Report (Employee Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/employee-attendance-report-employee-wise",
            modules: [],
          },
          {
            name: "Employee Attendance Monthly (Day Wise)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/employee-attendance-monthly-day-wise",
            modules: [],
          },
          {
            name: "Employee Attendance Monthly (With Time)",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/attendance-management/employee-attendance-monthly-with-time",
            modules: [],
          },
        ],
      },
      {
        name: "Leave Managenet",
        icon: <GrDocumentUser />,
        icon2: <GrDocumentUser  />,
        to: "/admin/leave-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/leave-management",
              data: LeaveManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
    ],
  },
  {
    _id: "section.04",
    title: "Employee Management",
    nodes: [
      {
        name: "Employee Management",
        icon: <LuUserCheck2 />,
        icon2: <LuUserCheck2  />,
        to: "/admin/employee-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/Employee-management",
              data: EmployeeManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [
          {
            name: "Add Employee",
            icon: <LuUserPlus2 />,
            icon2: <LuUserPlus2  />,
            to: "/admin/employee-management/add-employee",
            modules: [],
          },
          {
            name: "Employee List",
            icon: <LuList />,
            icon2: <LuList  />,
            to: "/admin/employee-management/employee-list",
            modules: [],
          },
          {
            name: "Dropped List",
            icon: <LuUserX2 />,
            icon2: <LuUserX2  />,
            to: "/admin/employee-management/dropped-employee-list",
            modules: [],
          },
          {
            name: "RFID Card Assign",
            icon: <LuTablet />,
            icon2: <LuTablet  />,
            to: "/admin/employee-management/employee-rfid-card-assign",
            modules: [],
          },
          {
            name: "Attendance Register",
            icon: <LuClipboardList />,
            icon2: <LuClipboardList  />,
            to: "/admin/employee-management/employee-attendance-register",
            modules: [],
          },

          {
            name: "Photo And Document Update",
            icon: <LuUserSquare2 />,
            icon2: <LuUserSquare2  />,
            to: "/admin/employee-management/update-employee-photo-document",
            modules: [],
          },
          {
            name: "Employee Profile Update",
            icon: <LuUserCog2 />,
            icon2: <LuUserCog2  />,
            to: "/admin/employee-management/update-employee-profile",
            modules: [],
          },
          {
            name: "Salary Info Update",
            icon: <PiMoney />,
            icon2: <PiMoney  />,
            to: "/admin/employee-management/update-employee-salary-info",
            modules: [],
          },
        ],
      },
    ],
  },
  {
    _id: "section.05",
    title: "Financial Management",
    nodes: [
      {
        name: "Fees Management",
        icon: <FaRegMoneyBillAlt />,
        icon2: <FaRegMoneyBillAlt  />,
        to: "/admin/fees-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/fees-management",
              data: FeesManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [
          {
            name: "Fees",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/fees",
          },
          {
            name: "Transport Fees",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/transport-fees",
            modules: [],
          },
          {
            name: "Combine Fees",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/combine-transport",
            modules: [],
          },
          {
            name: "Hostel Fees",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/hostel-fees",
            modules: [],
          },
          {
            name: "Other Fees",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/other-fees",
            modules: [],
          },
          {
            name: "Previous Fees",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/previous-fees",
            modules: [],
          },
          {
            name: "Fees Reports",
            icon: <FaRegMoneyBillAlt />,
            icon2: <FaRegMoneyBillAlt  />,
            to: "/admin/fees-management/fees-reports",
            modules: [],
          },
          {
            name: "Dues Management & SMS",
            icon: <TbMessageDollar />,
            icon2: <TbMessageDollar  />,
            to: "/admin/dues-management",
            modules: [],
          },
          {
            name: "Penalty & Caution Money",
            icon: <LuHourglass />,
            icon2: <LuHourglass  />,
            to: "/admin/penalty-caution-money-management",
            modules: [],
          },
        ],
      },
      {
        name: "Account Management",
        icon: <LuCalculator />,
        icon2: <LuCalculator  />,
        to: "/admin/accounts-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/accounts-management",
              data: AccountManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [
          {
            name: "Stock Management",
            icon: <LuBox />,
            icon2: <LuBox  />,
            to: "/admin/account-management/stock-management",
            modules: [],
          },
          {
            name: "Assets Management",
            icon: <LuListOrdered />,
            icon2: <LuListOrdered  />,
            to: "/admin/account-management/assets-management",
            modules: [],
          },
        ],
      },
    ],
  },
  {
    _id: "section.06",
    title: "Communication",
    nodes: [
      {
        name: "Text & Whatsapp Messages",
        icon: <TiMessages />,
        icon2: <TiMessages  />,
        to: "/admin/manage-messages",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/manage-messages",
              data: TextAndWhatsappManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
      {
        name: "Notification Management",
        icon: <LuBellPlus />,
        icon2: <LuBellPlus  />,
        to: "/admin/notification-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/notification-management",
              data: NotificationManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
    ],
  },
  {
    _id: "section.07",
    title: "Academic Management",
    nodes: [
      {
        name: "Principal Desk",
        icon: <LuUserSquare2 />,
        icon2: <LuUserSquare2  />,
        to: "/admin/principal-desk",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/principal-desk",
              data: PrincipalDeskModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
      {
        name: "Time Table",
        icon: <LuTable />,
        icon2: <LuTable  />,
        to: "/admin/time-table-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/time-table-management",
              data: TimeTableModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
      {
        name: "Homework",
        icon: <LuPencilRuler />,
        icon2: <LuPencilRuler  />,
        to: "/admin/homework-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/homework-management",
              data: HomeworkManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
      {
        name: "Classwork",
        icon: <LuBookMarked />,
        icon2: <LuBookMarked  />,
        to: "/admin/classwork-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/classwork-management",
              data: ClassworkManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
      {
        name: "Examination",
        icon: <PiExam />,
        icon2: <PiExam  />,
        to: "/admin/examination",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/examination",
              data: ExaminationManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [
          {
            name: "Examination Management",
            icon: <PiExam />,
            icon2: <PiExam  />,
            to: "/admin/examination/examination-management",
            modules: [],
          },
          {
            name: "Monthly Test",
            icon: <PiExam />,
            icon2: <PiExam  />,
            to: "/admin/monthly-exams",
            modules: [],
          },
          {
            name: "Weekly/Surprise Test",
            icon: <PiExam />,
            icon2: <PiExam  />,
            to: "/admin/weekly-surprise-exams",
            modules: [],
          },
          {
            name: "Exam Results",
            icon: <PiStudent />,
            icon2: <PiStudent  />,
            to: "/admin/exam-results",
            modules: [],
          },

          {
            name: "Exam Paper Setter",
            icon: <LuPenLine />,
            icon2: <LuPenLine  />,
            to: "/admin/exam-paper-setter",
            modules: [],
          },
          {
            name: "Conduct Online Exam",
            icon: <PiExam />,
            icon2: <PiExam  />,
            to: "/admin/conduct-online-exam",
            modules: [],
          },
        ],
      },
    ],
  },
  {
    _id: "section.08",
    title: "Transportation Management",
    nodes: [
      {
        name: "Bus & Van Management",
        icon: <LuBus />,
        icon2: <LuBus  />,
        to: "/admin/bus-van-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/bus-van-management",
              data: BusVanManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
    ],
  },
  {
    _id: "section.09",
    title: "Task and Reminder Management",
    nodes: [
      {
        name: "Reminder Management",
        icon: <LuListTodo />,
        icon2: <LuListTodo  />,
        to: "/admin/reminder-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/reminder-management",
              data: ReminderManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
    ],
  },
  {
    _id: "section.10",
    title: "Application Managment",
    nodes: [
      {
        name: "Enquiry Management",
        icon: <TbMessageQuestion />,
        icon2: <TbMessageQuestion  />,
        to: "/admin/enquiries",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/enquiries",
              data: EnquiryManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
      {
        name: "Complaint Management",
        icon: <LiaExclamationSolid />,
        icon2: <LiaExclamationSolid  />,
        to: "/admin/complaint-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/complaint-management",
              data: ComplaintManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
      {
        name: "Application Management",
        icon: <IoPhonePortraitOutline />,
        icon2: <IoPhonePortraitOutline  />,
        to: "/admin/application-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/application-management",
              data: ApplicationManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
    ],
  },
  {
    _id: "section.11",
    title: "Access Control",
    nodes: [
      {
        name: "Manage Access",
        icon: <LuUserPlus2 />,
        icon2: <LuUserPlus2  />,
        to: "/admin/manage-access",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/manage-access",
              data: ManageAccessModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
    ],
  },
  {
    _id: "section.12",
    title: "System Management",
    nodes: [
      {
        name: "School Management",
        icon: <LuSchool />,
        icon2: <LuSchool  />,
        to: "/admin/manage-school-info",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/manage-school-info",
              data: SchoolInfoModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [
          {
            name: "Gallery Management",
            icon: <LuGalleryHorizontalEnd />,
            icon2: <LuGalleryHorizontalEnd  />,
            to: "/admin/gallery-management",
            modules: [],
          },
          {
            name: "School Calendar",
            icon: <LuCalendarDays />,
            icon2: <LuCalendarDays  />,
            to: "/admin/school-calendar",
            modules: [],
          },
          {
            name: "Session Management",
            icon: <LuCalendarClock />,
            icon2: <LuCalendarClock  />,
            to: "/admin/session-management",
            modules: [],
          },
        ],
      },
      {
        name: "Dowload Data",
        icon: <LuDownload />,
        icon2: <LuDownload  />,
        to: "/admin/download-data",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/download-data",
              data: DownloadDataModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
      {
        name: "Recyclebin (Past Expired Data)",
        icon: <RiDeleteBinLine />,
        icon2: <RiDeleteBinLine  />,
        to: "/admin/recyclebin-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/recyclebin-management",
              data: RecyclebinManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
      {
        name: "Software Management",
        icon: <LuSettings />,
        icon2: <LuSettings  />,
        to: "/admin/software-management",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/software-management",
              data: SoftwareManagementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [
          {
            name: "Software Settings",
            icon: <LuSettings />,
            icon2: <LuSettings  />,
            to: "/admin/software-settings",
            modules: [],
          },
          {
            name: "Software Backup & Security",
            icon: <LuDatabaseBackup />,
            icon2: <LuDatabaseBackup  />,
            to: "/admin/software-backup-security",
            modules: [],
          },
          {
            name: "Software Training Videos",
            icon: <LuYoutube />,
            icon2: <LuYoutube  />,
            to: "/admin/software-training-videos",
            modules: [],
          },
          {
            name: "Software Support",
            icon: <LuUserCircle2 />,
            icon2: <LuUserCircle2  />,
            to: "/admin/software-support",
            modules: [],
          },
        ],
      },
    ],
  },
  {
    _id: "section.12",
    title: "Government Requirments",
    nodes: [
      {
        name: "Government Requirement",
        icon: <LuList />,
        icon2: <LuList  />,
        to: "/admin/government-requirements",
        component: (
          <RoutesLayout
            pageProps={{
              pageName: "/government-requirements",
              data: GovernmentRequirementModules,
              type: "typeTwo",
            }}
          />
        ),
        modules: [],
      },
    ],
  },
  {
    _id: "",
    title: "time pass",
    nodes: [
      {
        name: "LP Marketplace",
        icon: <LuShoppingBag />,
        icon2: <LuShoppingBag />,
        component: <Marketplace />,
        to: "/admin/lp-marketplace",
        modules: [],
      },
      {
        name: "profile",
        icon: <LuUserCog2 />,
        icon2: <LuUserCog2 />,
        component: <ProfileOverview />,
        to: "/admin/profile",
      },
    ],
  },
];

export const routesDataSlice = createSlice({
  name: "Routes",
  initialState: {
    value: modulesData,
  },
  reducers: {
    handleData: (state) => {
      return state;
    },

    temp: (state, something) => {
      console.log(state, something);
    },
  },
});

export const { handleData, temp } = routesDataSlice.actions;

export default routesDataSlice.reducer;
