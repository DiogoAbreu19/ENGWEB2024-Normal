import csv
import json

def csv_to_json():
    # Read the CSV file
    with open("contratos2024.csv", mode='r', encoding='utf-8') as file:
        csv_reader = csv.DictReader(file, delimiter=';')
        data_list = [row for row in csv_reader]

    # Convert list of dictionaries to JSON
    json_data = json.dumps(data_list, indent=4, ensure_ascii=False)

    # Write JSON data to the output file
    with open("output.json", mode='w', encoding='utf-8') as file:
        file.write(json_data)

def main():
    # Convert CSV to JSON using the explicitly specified paths
    csv_to_json()

if __name__ == '__main__':
    main()