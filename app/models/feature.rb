class Feature
  def self.save
    feature_path = Dir.glob(Rails.root.join('public').join('feat_data', '*.mfc'))
    i = 1
    feature_path.each do |feature|
      File.open(feature, "r") do |f|
        data = []
        f.each_line do |line|
          data << line.chomp
        end
      feat = Test.where(v1: data[0],v2: data[1],v3: data[2], v4: data[3], v4: data[3], v5: data[4], v6: data[5], v7: data[6], v8: data[7], v9: data[8], v10: data[9], v11: data[10], v12: data[11], v13: data[12], v14: data[13], v15: data[14], v16: data[15], v17: data[16], v18: data[17], v19: data[18], v20: data[19], v21: data[20], v22: data[21], v23: data[22], v24: data[23], v25: data[26], v26: data[25], v27: data[26], v28: data[27], v29: data[28], v30: data[29], v31: data[30], v32: data[31], v33: data[32], v34: data[33], v35: data[34], v36: data[35], v37: data[36], v38: data[37], v39: data[38], v40: data[39], music_id: i).first_or_initialize
        feat.save
        i+=1
      end
    end
  end
end