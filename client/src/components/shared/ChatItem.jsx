import React, { memo } from "react";
import { Link } from "../styles/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessage,
  index = 0,
  handleDeleteChatOpen,
}) => {
  return (
    <Link to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >
      {/* Avatar card */}
        <Stack>
          <Typography>{name}</Typography>
          {newMessage && (
            <Typography>{newMessage.count} New Message</Typography>
          )}
        </Stack>
        {
            isOnline && (
                <Box
                sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "green",
                    position: "absolute",
                    top: "50%",
                    right: "1rem",
                    transform: "translateY(-50%)",
                }}
                />
            )
        }
      </div>
    </Link>
  );
};

export default memo(ChatItem);
