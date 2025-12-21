import React from "react";
import { Link } from "react-router";
import useAuth from "../../Hooks/UseAuth";
import Loading from "../../Components/Loading/Loading";
import { UserIcon, BookOpenIcon, ClipboardDocumentListIcon, PlusCircleIcon, UsersIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import UseRole from "../../Hooks/UseRole";

const DashboardHome = () => {
  const { user } = useAuth();
  const { role, isRoleLoading } = UseRole();

  if (isRoleLoading) return <Loading />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Welcome, {user?.displayName || "User"} 👋
      </h2>

      {/* USER DASHBOARD */}
      {role === "user" && (
        <div className="grid md:grid-cols-2 gap-6">
          <DashboardCard
            title="My Orders"
            desc="View your order history"
            icon={<ClipboardDocumentListIcon className="w-10 h-10 text-white" />}
            bgColor="bg-blue-500"
            link="/dashboard/my-orders"
          />
          <DashboardCard
            title="My Profile"
            desc="Manage your account"
            icon={<UserIcon className="w-10 h-10 text-white" />}
            bgColor="bg-green-500"
            link="/dashboard/profile"
          />
        </div>
      )}

      {/* LIBRARIAN DASHBOARD */}
      {role === "librarian" && (
        <div className="grid md:grid-cols-3 gap-6">
          <DashboardCard
            title="My Books"
            desc="Books you added"
            icon={<BookOpenIcon className="w-10 h-10 text-white" />}
            bgColor="bg-indigo-500"
            link="/dashboard/myBooks"
          />
          <DashboardCard
            title="Orders"
            desc="Orders for your books"
            icon={<ClipboardDocumentListIcon className="w-10 h-10 text-white" />}
            bgColor="bg-blue-500"
            link="/dashboard/librarianOrders"
          />
          <DashboardCard
            title="Add Book"
            desc="Add a new book"
            icon={<PlusCircleIcon className="w-10 h-10 text-white" />}
            bgColor="bg-green-500"
            link="/dashboard/addBooks"
          />
        </div>
      )}

      {/* ADMIN DASHBOARD */}
      {role === "admin" && (
        <div className="grid md:grid-cols-3 gap-6">
          <DashboardCard
            title="Manage Users"
            desc="Control user roles"
            icon={<UsersIcon className="w-10 h-10 text-white" />}
            bgColor="bg-red-500"
            link="/dashboard/AllUsers"
          />
          <DashboardCard
            title="Manage Books"
            desc="View & manage books"
            icon={<BookOpenIcon className="w-10 h-10 text-white" />}
            bgColor="bg-indigo-500"
            link="/dashboard/manageBooks"
          />
          <DashboardCard
            title="Overview"
            desc="Platform statistics"
            icon={<ChartBarIcon className="w-10 h-10 text-white" />}
            bgColor="bg-yellow-500"
            link="/dashboard/AllUsers"
          />
        </div>
      )}
    </div>
  );
};

const DashboardCard = ({ title, desc, icon, bgColor, link }) => (
  <Link to={link}>
    <div className="card flex items-center p-5 shadow-lg hover:shadow-2xl transition rounded-xl bg-white relative overflow-hidden">
      <div className={`p-4 rounded-full ${bgColor} mr-4 flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg text-center font-semibold">{title}</h3>
        <p className="text-sm  text-gray-500">{desc}</p>
      </div>
    </div>
  </Link>
);

export default DashboardHome;
