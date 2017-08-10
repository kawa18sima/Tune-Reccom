class Savemusic
  def self.MusicPath
    musics_path = Dir.glob(Rails.root.join('public').join('wave_data', '*.wav'))
    musics_path.each do |music_path|
      music = music_path.split('/')
      music_name = music[music.count-1].split('.wav')
      artist_name = music_name[0].split("--")[0]

      aritists = Artist.where(name: artist_name).first_or_initialize
      aritists.save

      artist_id = Artist.find_by( name: artist_name)

      musics = Music.where(name: music_name, path: music_path, artist_id: artist_id.id).first_or_initialize
      musics.save

      music = Music.find(100)
      puts music.aritist
    end
  end
end