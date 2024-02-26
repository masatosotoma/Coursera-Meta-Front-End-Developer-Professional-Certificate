import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProjectsSection from "./ProjectsSection";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div>
      <Image src={imageSrc} alt={title} mb={4} />
      <VStack spacing={2} align="start">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        <HStack>
          {/* Add a Link component for smooth scrolling */}
          <Text
            as="span"
            onClick={() =>
              handleSmoothScroll(
                `${title.toLowerCase().replace(/\s+/g, "-")}-section`
              )
            }
            cursor="pointer"
            color="blue.500"
          >
            View Details
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </div>
  );
};

export default Card;
