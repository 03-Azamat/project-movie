import { Box, Image, Text } from "@chakra-ui/react";

interface CardMoviesProps {
  movies: Props;
}

interface Props {
  id: string | number;
  poster_path: string;
  release_date: string;
  title: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
}

export default function CardMovies({ movies }: CardMoviesProps) {
  return (
    <Box maxW="264px">
      <Box>
        <Image
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movies.poster_path}`}
          objectFit="cover"
          rounded="20px"
        />
      </Box>
      <Box py="30px" display="flex" justifyContent="space-between">
        <Box maxW="70%">
          <Text fontSize="20px" fontWeight="600" lineHeight="140%">
            {movies.title}
          </Text>
          <Text>{movies.release_date}</Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="53px"
          h="53px"
          rounded="50%"
          bg="#D9D9D9"
          boxShadow="2px 4px 9px rgba(0, 0, 0, 0.25);"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="47px"
            h="47px"
            rounded="50%"
            bg="#9D9D9D"
            textColor="white"
            fontWeight="600"
          >
            {movies.vote_average} %
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
