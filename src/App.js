import React from "react";
import Header from "./componants/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import DetailsMoviesPage from "./pages/DetailsMoviesPage";
import DetailsSeriesPage from "./pages/DetailsSeriesPage";
import Footer from "./componants/Footer";
import MovieDetailsCastAndCrew from "./pages/pagesDelailsMovies/MovieDetailsCastAndCrew";
import PersonDetails from "./pages/pagesDelailsMovies/PersonDetails";
import ReviewPage from "./pages/pagesDelailsMovies/ReviewPage";
import VideoPage from "./pages/pagesDelailsMovies/VideoPage";
import ImagesBackdropsPage from "./pages/pagesDelailsMovies/ImagesBackdropsPage";
import ImagesPostersPage from "./pages/pagesDelailsMovies/ImagesPostersPage";
import CollectionPage from "./pages/pagesDelailsMovies/CollectionPage";
import PersonSeriesDetails from "./pages/pagesDetailsSeries/PersonSeriesDetails";
import SeriesDetailsCastAndCrew from "./pages/pagesDetailsSeries/SeriesDetailsCastAndCrew";
import ReviewSeriesPage from "./pages/pagesDetailsSeries/ReviewSeriesPage";
import VideoPageSeries from "./pages/pagesDetailsSeries/VideoPageSeries";
import ImagesBackdropsPageSeries from "./pages/pagesDetailsSeries/ImagesBackdropsPageSeries";
import ImagesPostersPageSeries from "./pages/pagesDetailsSeries/ImagesPostersPageSeries";
import SeasonPageS from "./pages/pagesDetailsSeries/SeasonPageS";
import SeasonPageOfSeries from "./pages/pagesDetailsSeries/SeasonPageOfSeries";
import PageCreditsEpisodeOfSeasonSeries from "./pages/pagesDetailsSeries/PageCreditsEpisodeOfSeasonSeries";
import PageNotFound from "./PageNotFound";
import HomeSearch from "./pages/HomeSearch";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/contactus" element={<ContactUs />} />



        <Route path="/movie/:id/title/:title" element={<DetailsMoviesPage />} />
        <Route path="/tv/:id/name/:name" element={<DetailsSeriesPage />} />
        <Route path="/movie/:id/title/:title/cast" element={<MovieDetailsCastAndCrew />} />
        <Route path="/person/:id/hisname/:name" element={<PersonDetails />} />
        <Route path="/movie/:id/title/:title/reviews" element={<ReviewPage />} />
        <Route path="/movie/:id/title/:title/videos" element={<VideoPage />} />
        <Route path="/movie/:id/title/:title/images/backdrops" element={<ImagesBackdropsPage />} />
        <Route path="/movie/:id/title/:title/images/posters" element={<ImagesPostersPage />} />
        <Route path="/collection/:id/title/:title" element={<CollectionPage />} />


        <Route path="/person/:id/hisname/:name" element={<PersonSeriesDetails />} />
        <Route path="/tv/:id/name/:name/cast" element={<SeriesDetailsCastAndCrew />} />
        <Route path="/tv/:id/name/:name/reviews" element={<ReviewSeriesPage />} />
        <Route path="/tv/:id/name/:name/videos" element={<VideoPageSeries />} />
        <Route path="/tv/:id/name/:name/images/backdrops" element={<ImagesBackdropsPageSeries />} />
        <Route path="/tv/:id/name/:name/images/posters" element={<ImagesPostersPageSeries />} />
        <Route path="/tv/:id/name/:name/seasons" element={<SeasonPageS />} />
        <Route path="/tv/:id/name/:name/season/:numberSeason" element={<SeasonPageOfSeries />} />
        <Route path="/tv/:seriesId/season/:seasonNumber/episode/:episodeNumber" element={<PageCreditsEpisodeOfSeasonSeries />} />


      {/* HomeSearch Page */}
      <Route path="/searchwith/:value/in/:category" element={<HomeSearch />} />


        <Route path="/*" element={<PageNotFound />} />
      </Routes>    


      <Footer />
    </>
  );
}

export default App;
