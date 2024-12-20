import React, { useState } from "react";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";

import { RiAddCircleFill, RiMailLine, RiMessage3Line } from "react-icons/ri";

import { BoxedButton } from "../ClubButtons";
import { ImInstagram } from "react-icons/im";
import { EmailLightText, Headline, UserLightText } from "../ClubText";

export interface ICard {
  name: string;
  userhandle?: string;
  description?: string;
  image?: string;
  custom?: string;
}

export const Card = ({
    name,
    userhandle,
    description, 
    custom = "100px",
    image = "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    instagramLink // Added prop for dynamic Instagram link
  }: ICard & { instagramLink?: string }) => {
    const [open, setOpen] = useState(false);
    const containerControls = useAnimation();
    const imageContainerControls = useAnimation();
    const imageControls = useAnimation();
    const sideImageText = useAnimation();
    const bottomContainerControls = useAnimation();
    const bottomButtons = useAnimation();
    const bottomTexts = useAnimation();
  
    const containerVariants: Variants = {
      open: { flexDirection: "column" },
      close: { flexDirection: "row" }
    };
  
    const imageContainerVariants: Variants = {
      open: {
        width: "100%",
        height: "200px",
        borderRadius: "0.45rem 0.45rem 0rem 0rem",
        margin: "0rem 0rem 0rem 0rem",
        borderWidth: "0px 0px 4px 0px"
      },
      close: {
        width: "4rem",
        height: "4rem",
        borderRadius: "4rem 4rem 4rem 4rem",
        margin: "1rem 0.5rem 1rem 1rem",
        borderWidth: "4px 4px 4px 4px"
      }
    };
  
    const sideImageTextVariants: Variants = {
      open: { opacity: 0, x: 25, display: "none", transition: { duration: 0.4, display: { delay: 0.4 } } },
      close: { opacity: 1, x: 0, display: "flex" }
    };
  
    const bottomContainerVariants: Variants = {
      open: { height: "fit-content", transition: { duration: 0.4 } },
      close: { height: "0px", transition: { duration: 0.2 } }
    };
  
    const bottomOpacity: Variants = {
      open: { opacity: 1, transition: { duration: 0.4 } },
      close: { opacity: 0, transition: { duration: 0.4 } }
    };
  
    const imageVariants: Variants = {
      open: (i: number | string) => ({ y: i }),
      close: { y: 0 }
    };
  
    const handleOpen = async () => {
      await sideImageText.start("open");
      await containerControls.start("open");
      setTimeout(async () => {
        imageControls.start("open");
        imageContainerControls.start("open");
        await bottomContainerControls.start("open");
        await bottomButtons.start("open");
        await bottomTexts.start("open");
      }, 50);
    };
  
    const handleClose = async () => {
      await bottomTexts.start("close");
      await bottomButtons.start("close");
      await bottomContainerControls.start("close");
      setTimeout(async () => {
        imageControls.start("close");
        imageContainerControls.start("close");
        await containerControls.start("close");
        await sideImageText.start("close");
      }, 50);
    };
  
    const handleCardClick = async () => {
      if (open) {
        await handleClose();
        setOpen(false);
      } else {
        await handleOpen();
        setOpen(true);
      }
    };
  
    return (
      <div className="max-w-[30rem] mb-8 m-auto flex flex-col w-100 bg-gradient-to-r from-gray-100 to-gray-300 min-h-16 rounded-lg">
        <motion.div
          onClick={handleCardClick}
          initial="close"
          animate={containerControls}
          variants={containerVariants}
          className="flex w-full cursor-pointer"
        >
          {/* IMAGE */}
          <motion.div
            initial="close"
            animate={imageContainerControls}
            variants={imageContainerVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-zinc-900 drop-shadow-xl border-white shrink-0 overflow-hidden flex justify-center items-center"
          >
            <motion.img
              src={image}
              alt={name}
              animate={imageControls}
              custom={custom}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              variants={imageVariants}
              initial="close"
            />
          </motion.div>
  
          {/* SIDE TEXT */}
          <motion.div
            initial="close"
            animate={sideImageText}
            variants={sideImageTextVariants}
            className="flex-col my-4 w-full"
          >
            <Headline text={name} />
            {userhandle && <UserLightText text={userhandle} hasIcon={false} />}
          </motion.div>
  
          {/* BOTTOM INFO */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial="close"
                className="w-full p-5"
                transition={{ ease: "easeInOut" }}
                animate={bottomContainerControls}
                variants={bottomContainerVariants}
              >
                <motion.div
                  animate={bottomButtons}
                  variants={bottomOpacity}
                  initial="close"
                  className="flex w-full flex-row justify-between"
                >
                  <div className="w-auto">
                    <BoxedButton
                      text="Know More"
                      icon={<ImInstagram size={20} className="text-white" />}
                      link={instagramLink}  // Passing dynamic Instagram link
                    />
                  </div>
                </motion.div>
                <motion.div
                  animate={bottomTexts}
                  variants={bottomOpacity}
                  initial="close"
                  className="flex w-full flex-col justify-center items-center mb-8"
                >
                  <Headline text={name} />
                  <div className="w-full flex flex-col justify-center items-center">
                    {userhandle && <UserLightText text={userhandle} hasIcon />}
                    {description && <EmailLightText description={description} />}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  };