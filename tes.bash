# Mengubah array json menjadi format yang bisa dibaca oleh fzf
# Setiap baris berisi title|description|cmd
json=$(cat tes.json)
list=$(jq -r '.[] | "\(.title)"' <<< $json)
# preview() {
#   # local title=$(jq --arg index $1 '.[$index|tonumber] | "\(.title)"' <<< $json)
#   # local tes=$(jq -r '.[]' <<< $json)
#   echo "ini angka $1"
#   echo $json
# }

# echo "$(preview 0)"
echo "$list" | fzf --preview "cat tes.json | jq --arg index {n} '.[\$index|tonumber]'" --preview-window right:60%:wrap
# echo "$list" | fzf --preview "echo \"$(preview {n})\"" --preview-window right:60%:wrap

# Menjalankan fzf dengan opsi preview dan output
# Preview menampilkan description dari item yang dipilih
# Output menampilkan cmd dari item yang dipilih
# echo "$list" | fzf --delimiter='|' --preview='echo {2}' --with-nth=1 --bind='enter:execute({3})'
