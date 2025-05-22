import React from "react";
import { Sheet, Button, Box, Icon } from "zmp-ui";

interface MODAL_CHATProps {
  visible: boolean;
  onClose: () => void;
  avatar: string;
  title: string;
  price: string;
}

function MODAL_CHAT({ visible, onClose, avatar, title, price }: MODAL_CHATProps) {
  return (
    <Sheet visible={visible} onClose={onClose} autoHeight   className="custom-sheet"

>
      <Box className="custom-bottom-sheet" flex flexDirection="column" p={4}>

        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            cursor: "pointer",
            zIndex: 10,
          }}
          onClick={onClose}
        >
          <Icon icon="zi-close" size={20} />
        </div>
<div className="flex gap-4">
        <img
          src={avatar}
          alt={title}
          style={{ width: "30%", borderRadius: "8px", marginBottom: 16 }}
        />

        <Box mb={2}>
          <h2 style={{ fontSize: 18, fontWeight: "semi-bold", color: "#16462F" }}>{title}</h2>
          <p style={{ color: "#F58220", fontWeight: "semi-bold", fontSize: 16 }}>{price}</p>
        </Box>
</div>
        <Button fullWidth className="bg-[#F58220]" onClick={onClose}>
           <Icon icon="zi-chat" className="pb-5 pr-1" size={16} /> Liên hệ
        </Button>
      </Box>
    </Sheet>
  );
}

export default MODAL_CHAT;
