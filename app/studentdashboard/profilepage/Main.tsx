"use client";
import logo from "../../../public/images/logo-black.png";
import profile from "../../../public/images/profile-img.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Main.css'


function ProfilePage() {
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center ms-5">
            <img src={logo.src} alt="" width={80} />
            {/* <span className="d-none d-lg-block">NiceAdmin</span> */}
          </a>
          <i className="bi bi-list toggle-sidebar-btn" />
        </div>
        {/* End Logo */}
        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search" />
            </button>
          </form>
        </div>
        {/* End Search Bar */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search" />
              </a>
            </li>
            {/* End Search Icon*/}
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell" />
                <span className="badge bg-primary badge-number">4</span>
              </a>
              {/* End Notification Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning" />
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger" />
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-check-circle text-success" />
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary" />
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all notifications</a>
                </li>
              </ul>
              {/* End Notification Dropdown Items */}
            </li>
            {/* End Notification Nav */}
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-chat-left-text" />
                <span className="badge bg-success badge-number">3</span>
              </a>
              {/* End Messages Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                  You have 3 new messages
                  <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <a href="#">
                    {/* <img
                        src="assets/img/messages-1.jpg"
                        alt=""
                        className="rounded-circle"
                      /> */}
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>4 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <a href="#">
                    {/* <img
                        src="assets/img/messages-2.jpg"
                        alt=""
                        className="rounded-circle"
                      /> */}
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>6 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                  <a href="#">
                    {/* <img
                        src="assets/img/messages-3.jpg"
                        alt=""
                        className="rounded-circle"
                      /> */}
                    <div>
                      <h4>David Muldon</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>8 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all messages</a>
                </li>
              </ul>
              {/* End Messages Dropdown Items */}
            </li>
            {/* End Messages Nav */}
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src={profile.src}
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  K. Anderson
                </span>
              </a>
              {/* End Profile Iamge Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Kevin Anderson</h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-person" />
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-gear" />
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="pages-faq.html"
                  >
                    <i className="bi bi-question-circle" />
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right" />
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
              {/* End Profile Dropdown Items */}
            </li>
            {/* End Profile Nav */}
          </ul>
        </nav>
        {/* End Icons Navigation */}
      </header>
      {/* End Header */}
      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </a>
          </li>
          {/* End Dashboard Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-menu-button-wide" />
              <span>Courses</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            {/* <ul
          id="components-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="components-alerts.html">
              <i className="bi bi-circle" />
              <span>Alerts</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i className="bi bi-circle" />
              <span>Accordion</span>
            </a>
          </li>
          <li>
            <a href="components-badges.html">
              <i className="bi bi-circle" />
              <span>Badges</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle" />
              <span>Breadcrumbs</span>
            </a>
          </li>
          <li>
            <a href="components-buttons.html">
              <i className="bi bi-circle" />
              <span>Buttons</span>
            </a>
          </li>
          <li>
            <a href="components-cards.html">
              <i className="bi bi-circle" />
              <span>Cards</span>
            </a>
          </li>
          <li>
            <a href="components-carousel.html">
              <i className="bi bi-circle" />
              <span>Carousel</span>
            </a>
          </li>
          <li>
            <a href="components-list-group.html">
              <i className="bi bi-circle" />
              <span>List group</span>
            </a>
          </li>
          <li>
            <a href="components-modal.html">
              <i className="bi bi-circle" />
              <span>Modal</span>
            </a>
          </li>
          <li>
            <a href="components-tabs.html">
              <i className="bi bi-circle" />
              <span>Tabs</span>
            </a>
          </li>
          <li>
            <a href="components-pagination.html">
              <i className="bi bi-circle" />
              <span>Pagination</span>
            </a>
          </li>
          <li>
            <a href="components-progress.html">
              <i className="bi bi-circle" />
              <span>Progress</span>
            </a>
          </li>
          <li>
            <a href="components-spinners.html">
              <i className="bi bi-circle" />
              <span>Spinners</span>
            </a>
          </li>
          <li>
            <a href="components-tooltips.html">
              <i className="bi bi-circle" />
              <span>Tooltips</span>
            </a>
          </li>
        </ul> */}
          </li>
          {/* End Components Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-journal-text" />
              <span>Wallet</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            {/* <ul
          id="forms-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="forms-elements.html">
              <i className="bi bi-circle" />
              <span>Form Elements</span>
            </a>
          </li>
          <li>
            <a href="forms-layouts.html">
              <i className="bi bi-circle" />
              <span>Form Layouts</span>
            </a>
          </li>
          <li>
            <a href="forms-editors.html">
              <i className="bi bi-circle" />
              <span>Form Editors</span>
            </a>
          </li>
          <li>
            <a href="forms-validation.html">
              <i className="bi bi-circle" />
              <span>Form Validation</span>
            </a>
          </li>
        </ul> */}
          </li>
          {/* End Forms Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-layout-text-window-reverse" />
              <span>Assignment</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            {/* <ul
          id="tables-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="tables-general.html">
              <i className="bi bi-circle" />
              <span>General Tables</span>
            </a>
          </li>
          <li>
            <a href="tables-data.html">
              <i className="bi bi-circle" />
              <span>Data Tables</span>
            </a>
          </li>
        </ul> */}
          </li>
          {/* End Tables Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-bar-chart" />
              <span>Live Session </span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            {/* <ul
          id="charts-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="charts-chartjs.html">
              <i className="bi bi-circle" />
              <span>Chart.js</span>
            </a>
          </li>
          <li>
            <a href="charts-apexcharts.html">
              <i className="bi bi-circle" />
              <span>ApexCharts</span>
            </a>
          </li>
          <li>
            <a href="charts-echarts.html">
              <i className="bi bi-circle" />
              <span>ECharts</span>
            </a>
          </li>
        </ul> */}
          </li>
          {/* End Charts Nav */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-gem" />
              <span>My Learning</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            {/* <ul
          id="icons-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="icons-bootstrap.html">
              <i className="bi bi-circle" />
              <span>Bootstrap Icons</span>
            </a>
          </li>
          <li>
            <a href="icons-remix.html">
              <i className="bi bi-circle" />
              <span>Remix Icons</span>
            </a>
          </li>
          <li>
            <a href="icons-boxicons.html">
              <i className="bi bi-circle" />
              <span>Boxicons</span>
            </a>
          </li>
        </ul> */}
          </li>
          {/* End Icons Nav */}
          <li className="nav-heading">Pages</li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person" />
              <span>Profile</span>
            </a>
          </li>
          {/* End Profile Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <i className="bi bi-question-circle" />
              <span>F.A.Q</span>
            </a>
          </li>
          {/* End F.A.Q Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi bi-envelope" />
              <span>Contact</span>
            </a>
          </li>
          {/* End Contact Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-register.html">
              <i className="bi bi-card-list" />
              <span>Register</span>
            </a>
          </li>
          {/* End Register Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-login.html">
              <i className="bi bi-box-arrow-in-right" />
              <span>Login</span>
            </a>
          </li>
          {/* End Login Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-error-404.html">
              <i className="bi bi-dash-circle" />
              <span>Error 404</span>
            </a>
          </li>
          {/* End Error 404 Page Nav */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark" />
              <span>Blank</span>
            </a>
          </li>

          {/* End Blank Page Nav */}
        </ul>
      </aside>
      {/* End Sidebar*/}
      <main id="main" className="main ">
        <div className="pagetitle">
          <h1 className="m-3">Profile</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Users</li>
              <li className="breadcrumb-item active">Profile</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section profile">
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img
                    src={profile.src}
                    alt="Profile"
                    className="rounded-circle"
                  />
                  <h2>Kevin Anderson</h2>
                  <h3>Student</h3>
                  <div className="social-links mt-2">
                    {/* <a href="#" className="twitter">
                        <i className="bi bi-twitter" />
                      </a>
                      <a href="#" className="facebook">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="#" className="instagram">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="#" className="linkedin">
                        <i className="bi bi-linkedin" />
                      </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body pt-3">
                  {/* Bordered Tabs */}
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                      >
                        Overview
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                      >
                        Edit Profile
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-settings"
                      >
                        Settings
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-change-password"
                      >
                        Change Password
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      <h5 className="card-title">About</h5>
                      <p className="small fst-italic">
                        Sunt est soluta temporibus accusantium neque nam maiores
                        cumque temporibus. Tempora libero non est unde veniam
                        est qui dolor. Ut sunt iure rerum quae quisquam autem
                        eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                        unde.
                      </p>
                      <h5 className="card-title">Profile Details</h5>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">
                          Full Name
                        </div>
                        <div className="col-lg-9 col-md-8">Kevin Anderson</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Company</div>
                        <div className="col-lg-9 col-md-8">
                          Lueilwitz, Wisoky and Leuschke
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Job</div>
                        <div className="col-lg-9 col-md-8">Web Designer</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Country</div>
                        <div className="col-lg-9 col-md-8">USA</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Address</div>
                        <div className="col-lg-9 col-md-8">
                          A108 Adam Street, New York, NY 535022
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Phone</div>
                        <div className="col-lg-9 col-md-8">
                          (436) 486-3538 x29071
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Email</div>
                        <div className="col-lg-9 col-md-8">
                          k.anderson@example.com
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade profile-edit pt-3"
                      id="profile-edit"
                    >
                      {/* Profile Edit Form */}
                      <form>
                        <div className="row mb-3">
                          <label
                            htmlFor="profileImage"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Profile Image
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <img src={profile.src} alt="Profile" />
                            <div className="pt-2">
                              <a
                                href="#"
                                className="btn btn-primary btn-sm"
                                title="Upload new profile image"
                              >
                                <i className="bi bi-upload" />
                              </a>
                              <a
                                href="#"
                                className="btn btn-danger btn-sm"
                                title="Remove my profile image"
                              >
                                <i className="bi bi-trash" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="fullName"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Full Name
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="fullName"
                              type="text"
                              className="form-control"
                              id="fullName"
                              defaultValue="Kevin Anderson"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="about"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            About
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <textarea
                              name="about"
                              className="form-control"
                              id="about"
                              style={{ height: 100 }}
                              defaultValue={
                                "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde."
                              }
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="company"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Company
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="company"
                              type="text"
                              className="form-control"
                              id="company"
                              defaultValue="Lueilwitz, Wisoky and Leuschke"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Job"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Job
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="job"
                              type="text"
                              className="form-control"
                              id="Job"
                              defaultValue="Web Designer"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Country"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Country
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="country"
                              type="text"
                              className="form-control"
                              id="Country"
                              defaultValue="USA"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Address"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Address
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="address"
                              type="text"
                              className="form-control"
                              id="Address"
                              defaultValue="A108 Adam Street, New York, NY 535022"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Phone"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Phone
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="phone"
                              type="text"
                              className="form-control"
                              id="Phone"
                              defaultValue="(436) 486-3538 x29071"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Email"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="email"
                              type="email"
                              className="form-control"
                              id="Email"
                              defaultValue="k.anderson@example.com"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Twitter"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Twitter Profile
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="twitter"
                              type="text"
                              className="form-control"
                              id="Twitter"
                              defaultValue="https://twitter.com/#"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Facebook"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Facebook Profile
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="facebook"
                              type="text"
                              className="form-control"
                              id="Facebook"
                              defaultValue="https://facebook.com/#"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Instagram"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Instagram Profile
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="instagram"
                              type="text"
                              className="form-control"
                              id="Instagram"
                              defaultValue="https://instagram.com/#"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="Linkedin"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Linkedin Profile
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="linkedin"
                              type="text"
                              className="form-control"
                              id="Linkedin"
                              defaultValue="https://linkedin.com/#"
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </form>
                      {/* End Profile Edit Form */}
                    </div>
                    <div className="tab-pane fade pt-3" id="profile-settings">
                      {/* Settings Form */}
                      <form>
                        <div className="row mb-3">
                          <label
                            htmlFor="fullName"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Email Notifications
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="changesMade"
                                // defaultChecked=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="changesMade"
                              >
                                Changes made to your account
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="newProducts"
                                // defaultChecked=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="newProducts"
                              >
                                Information on new products and services
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="proOffers"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="proOffers"
                              >
                                Marketing and promo offers
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="securityNotify"
                                // defaultChecked=""
                                // disabled=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="securityNotify"
                              >
                                Security alerts
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </form>
                      {/* End settings Form */}
                    </div>
                    <div
                      className="tab-pane fade pt-3"
                      id="profile-change-password"
                    >
                      {/* Change Password Form */}
                      <form>
                        <div className="row mb-3">
                          <label
                            htmlFor="currentPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Current Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="password"
                              type="password"
                              className="form-control"
                              id="currentPassword"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="newPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            New Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="newpassword"
                              type="password"
                              className="form-control"
                              id="newPassword"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label
                            htmlFor="renewPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Re-enter New Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="renewpassword"
                              type="password"
                              className="form-control"
                              id="renewPassword"
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Change Password
                          </button>
                        </div>
                      </form>
                      {/* End Change Password Form */}
                    </div>
                  </div>
                  {/* End Bordered Tabs */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* End #main */}
    </>
  );
}
export default ProfilePage;
