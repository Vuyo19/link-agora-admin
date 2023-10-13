import React, { Component } from "react";
import { Trash2, Mailbox } from "lucide-react";
import { FiSearch } from "react-icons/fi";

class MyInbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNotification: null,
      searchValue: "",
    };
  }

  handlenotificationClick = (notification) => {
    this.setState({ selectedNotification: notification });
  };

  handleSearchInputChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleDeleteAll = () => {
    // Implement logic to delete all notifications here.
  };

  render() {
    const { selectedNotification, searchValue } = this.state;
    const notifications = [
      {
        id: 1,
        name: "Eleanor Brown",
        email: "eleanor@example.com",
        title: "Meeting Request",
        message:
          "Hello, I would like to schedule a meeting with you to discuss our upcoming project.",
      },
      {
        id: 2,
        name: "Samuel Green",
        email: "samuel@example.com",
        title: "Product Feedback",
        message:
          "I wanted to provide feedback on your product. It's great, but here are a few suggestions for improvement.",
      },
      {
        id: 3,
        name: "Sophia Martinez",
        email: "sophia@example.com",
        title: "Event Invitation",
        message:
          "You are cordially invited to my birthday party on the 15th of October. Please RSVP.",
      },
      {
        id: 4,
        name: "Oliver Wilson",
        email: "oliver@example.com",
        title: "Job Inquiry",
        message:
          "I'm interested in the job position at your company. Can you provide more details about the role?",
      },
      {
        id: 5,
        name: "Ava Anderson",
        email: "ava@example.com",
        title: "Project Update",
        message:
          "Here's the latest update on our ongoing project. Please take a look and let me know your thoughts.",
      },
      {
        id: 6,
        name: "Noah Taylor",
        email: "noah@example.com",
        title: "New Opportunity",
        message:
          "I have an exciting new business opportunity to discuss with you. When can we chat?",
      },
      {
        id: 7,
        name: "Emma Johnson",
        email: "emma@example.com",
        title: "Feedback Request",
        message:
          "We value your opinion! Please take a moment to provide feedback on your recent experience with us.",
      },
      {
        id: 8,
        name: "William Harris",
        email: "william@example.com",
        title: "Collaboration Proposal",
        message:
          "I have a proposal for a collaboration that I think could be mutually beneficial. Let's connect.",
      },
      {
        id: 9,
        name: "Olivia Miller",
        email: "olivia@example.com",
        title: "Thank You Note",
        message:
          "I wanted to express my gratitude for your assistance. Thank you for your help and support.",
      },
    ];

    const filteredNotifications = notifications.filter((notification) =>
      notification.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <div style={{ padding: "20px" }}>
        {/* Search Bar */}
        <div>
          <div className="flex items-center p-6 space-x-6 rounded-xl bg-white border-gray-200 border mb-6">
            <div className="relative flex items-center w-full mt-6 md:mt-0">
              <span className="absolute">
                <FiSearch className="w-5 h-5 ml-2" color="#6d6d6d" />
              </span>
              <input
                type="text"
                placeholder="Search for events"
                className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={searchValue}
                onChange={this.handleSearchInputChange}
              />
            </div>
            <div className="bg-[#116239] w-24 h-9 text-white text-sm rounded-lg hover:bg-[#8A2623] cursor-pointer flex items-center justify-center">
              <span>Search</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid #e5e7eb",
            borderRadius: "5px",
            height: "400px",
            overflow: "hidden",
          }}
        >
          {/* White Section */}
          <div
            style={{
              flex: "1",
              backgroundColor: "#fff",
              padding: "20px",
              overflowY: "auto",
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2>Notifications</h2>
              <button
                onClick={this.handleDeleteAll}
                className="text-[#8A2623] font-medium hover:underline"
              >
                Delete All
              </button>
            </div>
            <div>
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => this.handlenotificationClick(notification)}
                  style={{
                    cursor: "pointer",
                    marginBottom: "10px",
                    padding: "10px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "5px",
                    transition: "background-color 0.3s ease",
                    backgroundColor:
                      selectedNotification &&
                      selectedNotification.id === notification.id
                        ? "#01663E"
                        : "transparent",
                    color:
                      selectedNotification &&
                      selectedNotification.id === notification.id
                        ? "white"
                        : "black",
                  }}
                >
                  {notification.name} - {notification.title}
                </div>
              ))}
              <div
                className="mt-8"
                style={{ display: "flex", alignItems: "center" }}
              >
                <hr
                  style={{
                    flex: 1,
                    borderTop: "1px solid #e5e7eb",
                    margin: "0 10px",
                  }}
                />
                <p className="font-medium text-center text-gray-500">
                  You're all caught up.
                </p>
                <hr
                  style={{
                    flex: 1,
                    borderTop: "1px solid #e5e7eb",
                    margin: "0 10px",
                  }}
                />
              </div>
            </div>
          </div>
          {/* Vertical Divider */}
          <div style={{ width: "2px", backgroundColor: "#e5e7eb" }}></div>
          {/* Gray Section */}
          <div
            style={{
              flex: "1",
              backgroundColor: "#f0f0f0",
              padding: "20px",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <h2>Message</h2>
            {selectedNotification ? (
              <div>
                <div>
                  <h3>{selectedNotification.name}</h3>
                  <p>{selectedNotification.email}</p>
                </div>
                <p>{selectedNotification.message}</p>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      style={{
                        marginRight: "10px",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "15%",
                        cursor: "pointer",
                      }}
                      className="bg-[#8A2623] hover:bg-[#01663E]"
                    >
                      <Trash2 color="white" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Default Message (centered)
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Mailbox size={48} />
                <p className="font-medium">
                  Select a notification to see its content.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MyInbox;
