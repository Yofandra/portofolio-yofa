import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserManagement from "../assets/pharma_path/user_management.png"
import QuizManagement from "../assets/pharma_path/quiz_management.png"
import DashboardUser from "../assets/pharma_path/dashboard_user.png"
import QuizAttempt from "../assets/pharma_path/quiz_attempt.png"
import QuizExplanation from "../assets/pharma_path/quiz_explanation.png"


const PharmaPath = () => {
  const featureCard = [
    {
      title: "User Management",
      img: UserManagement,
      description:
        "Admin can access this feature. In this feature, the Admin can manage all users and their data. The Admin can add, update, and delete user data.",
      align: "left",
    },
    {
      title: "Quiz Management",
      img: QuizManagement,
      description:
        "Admin can access this feature. In this feature, the Admin can manage all quizzes and their data. The Admin can add, update, and delete quiz data. Admin also can import data quiz using excel file.",
      align: "right",
    },
    {
      title: "Dashboard",
      img: DashboardUser,
      description:
        "Accessible to all users. In this feature, the users can view all available quizzes. User can also start quiz directly from this page.",
      align: "left",
    },
    {
      title: "Quiz Attempt",
      img: QuizAttempt,
      description:
        "User can access this feature. In this feature, the user can attempt all available quizzes. User can also view the result and explanation after finishing the quiz.",
      align: "right",
    },
    {
      title: "Quiz Explanation",
      img: QuizExplanation,
      description:
        "User can access this feature. In this feature, the user can view the result and explanation after finishing the quiz.",
      align: "left",
    },
  ];
  return (
    <div className="font-barlow flex flex-col items-center">
      <Navbar />
      <div className="pt-20 lg:pt-40 lg:mx-[150px]">
        <h1 className="text-center text-5xl font-medium">Pharma Path</h1>
        <p className="text-center text-base md:text-xl mt-5 px-5 md:px-0">
          An application designed to help pharmacy students learn by completing quizzes related to pharmaceutical topics.
        </p>
        <div className="flex flex-col mt-10 lg:mt-20 gap-14 md:gap-20">
            {featureCard.map((feature, index) => (
                <div key={index} className={`flex ${feature.align === 'left' ? 'flex-col md:flex-row' : 'flex-col-reverse md:flex-row'} items-center gap-3 md:gap-16 px-6 md:px-0`}>
                    {feature.align === 'left' ? (
                        <>
                            <img src={feature.img} alt={feature.title} className="lg:w-[700px] shadow-lg rounded-lg" />
                            <div>
                                <h3 className="text-2xl md:text-3xl font-semibold">{feature.title}</h3>
                                <p className="text-sm md:text-base mt-2 md:mt-5">{feature.description}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-semibold">{feature.title}</h3>
                                <p className="text-sm md:text-base mt-2 md:mt-5">{feature.description}</p>
                            </div>
                            <img src={feature.img} alt={feature.title} className="lg:w-[700px] shadow-lg" />
                        </>
                    )}
                </div>
            ))}
        </div>
        <p className="text-center text-base md:text-xl mt-10 md:mt-20 px-5 md:px-0">You can also visit this website at <a href="http://pharmapath.xo.je/quiz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline cursor-pointer">Pharma Path</a></p>
        <p className="text-center text-base md:text-xl mt-5 px-5 md:px-0">email: user@gmail.com</p>
        <p className="text-center text-base md:text-xl px-5 md:px-0">password: useruser</p>
      </div>
      <Footer />
    </div>
  );
};

export default PharmaPath;
