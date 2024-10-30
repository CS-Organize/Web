import { YoutubeTranscript } from 'youtube-transcript';

YoutubeTranscript.fetchTranscript('JPNG_Af2Y14').then(
  (transcript) => {
    transcript.forEach((line) => {
      const start = Math.floor(line.offset / 60) + ':' + Math.floor(line.offset % 60);
      const end = Math.floor((line.offset + line.duration) / 60) + ':' + Math.floor((line.offset + line.duration) % 60);
      process.stdout.write(start + '-' + end + ' ');
      process.stdout.write(line.text + ' ');
    });
    // console.log(transcript);
  }
);
